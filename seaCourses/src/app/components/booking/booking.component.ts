

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
export class BookingComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  formData: any = {}; 
  traineeForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.traineeForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // rate: ['', Validators.required],
      paymentWay: ['', Validators.required]
    });
  }

  submitEnrollForm(): void {
    if (this.traineeForm.valid) {
      this.http.post(`${this.apiUrl}Trainee/addTrainee`, this.traineeForm.value)
        .subscribe(response => {
          alert("تم الارسال");
          this.traineeForm.reset();
        }, error => {
          alert('خطا في التسجيل');
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}


  
  


