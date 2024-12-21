import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path:'', redirectTo:'home', pathMatch:'full' },
  // { path:'home', component:InicioComponent },
  // { path:'designer', component:DesignerComponent },
  // { path: 'productos', loadChildren: () => import('./Components/productos/productos.module').then(x => x.ProductosModule) },
  // { path: 'user', loadChildren: () => import('./Components/Users/user.module').then(x => x.UserModule), canActivate: [AuthGuard] }, // Aplica el guard aquí
  // { path:'contacto', component:ContactoComponent },
  // { path: 'compra', loadChildren: () => import('./Components/compras/compras.module').then(m => m.ComprasModule) },
  // { path: 'admin', loadChildren: () => import('./Components/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard] },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
