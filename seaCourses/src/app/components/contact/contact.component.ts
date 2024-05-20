import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactSupportService } from 'src/app/Services/contact-support.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // contactForm!: FormGroup;

  private apiUrl= environment.apiUrl;
  // contactSupports:any [] = [];
  formData: any = {}; 
  constructor(private tech: ContactSupportService, private http: HttpClient){
    // this.contactForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   message: ['', Validators.required],
    // });
  }
 
  submitTechForm(): void {
    // Send form data to API
    this.http.post(`${this.apiUrl}TechSupport/CreateTechSupport`, this.formData)
      .subscribe(response => {
        alert("تم الارسال");
        // Optionally, reset the form after successful submission
        this.resetForm();
      }, error => {
        
        alert('خطا في التسجيل');
      });
  }
  resetForm(): void {
    // Clear form data
    this.formData = {};
  }
}
