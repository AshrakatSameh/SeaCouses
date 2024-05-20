import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ContactComponent } from './components/contact/contact.component';
import { LeaderComponent } from './components/leader/leader.component';
import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MedicalTermsComponent } from './components/medical-terms/medical-terms.component';
import { EnglishMedicalComponent } from './components/english-medical/english-medical.component';
import { IELTSComponent } from './components/ielts/ielts.component';
import { EnglishComponent } from './components/english/english.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CheckComponent } from './components/check/check.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'courses',component:CoursesComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'contact',component:ContactComponent},
  {path:'leader',component:LeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'customer',component:CustomersComponent},
  {path:'medical',component:MedicalTermsComponent},
  {path:'englishMedical',component:EnglishMedicalComponent},
  {path:'IELTS',component:IELTSComponent},
  {path:'english',component:EnglishComponent},
  {path:'photos',component:PhotosComponent},
  {path:'check',component:CheckComponent},
  {path:'dash',component:DashboardComponent ,canActivate: [authGuard]},
  {path: 'login', component:LoginComponent},
  {path:'booking',component:BookingComponent},
  {path:'**',component:MainComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
