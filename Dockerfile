# Stage 1: Build Angular application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies (no audit/fund for speed)
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build the application (produces dist/portafolio-jose/browser/ and dist/portafolio-jose/server/)
RUN npm run build

# Stage 2: Production runtime with nginx
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from build stage
COPY --from=build /app/dist/portafolio-jose/browser/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Healthcheck for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -q --spider http://localhost/ || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
