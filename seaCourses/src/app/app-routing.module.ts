import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ContactComponent } from './components/contact/contact.component';
import { LeaderComponent } from './components/leader/leader.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'courses',component:CoursesComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'contact',component:ContactComponent},
  {path:'leader',component:LeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:MainComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
