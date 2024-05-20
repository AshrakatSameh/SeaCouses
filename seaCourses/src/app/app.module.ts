import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StripeModule } from 'stripe-angular';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    TeachersComponent,
    ContactComponent,
    LeaderComponent,
    AboutComponent,
    CustomersComponent,
    MedicalTermsComponent,
    EnglishMedicalComponent,
    IELTSComponent,
    EnglishComponent,
    PhotosComponent,
    CheckComponent,
    DashboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    BrowserAnimationsModule,
    StripeModule.forRoot('pk_test_51PF5FMAG762v7YxJqAKEBMwN0frg1nEVfs7uTghZQSE49hfjnCNteOCS2gFSda3sylwYIXHqbgTr79YvujJ6pLPI00WUunxt5i'),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
