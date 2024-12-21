import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMEComponent } from './Components/about-me/about-me.component';
import { SkillComponent } from './Components/skill/skill.component';
import { CVComponent } from './Components/cv/cv.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path:'about', component:AboutMEComponent},
  {path:'skill',component:SkillComponent},
  {path:'cv',component:CVComponent},
  {path:'project',component:ProjectsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
