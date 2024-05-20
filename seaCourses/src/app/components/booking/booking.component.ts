import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/booking.service';
import { environment } from 'src/environments/environment.development';

enum PaymentTypes {
  VodafoneCash,
  Fawry,
  InstaPay,
  PayPal,
  Visa,
  MasterCard
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  implements OnInit{

  private apiUrl= environment.apiUrl;
  // contactSupports:any [] = [];
  formData: any = {}; 
  traineeArray: any[] = [];
  traineeForm!: FormGroup;

  
  constructor(private trainee: BookingService ,
    private fb: FormBuilder,
    private http: HttpClient,
  ){

    // this.traineeForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber:['', Validators.required],
    //   rate: ['', Validators.required],
    //   paymentWay:['' , Validators.required],
    // });

  
 
  }
  ngOnInit(): void {
  }

 
  submitEnrollForm(): void {
    // Send form data to API
    this.http.post(`${this.apiUrl}Trainee/addTrainee`, this.formData)
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
  

  
  


