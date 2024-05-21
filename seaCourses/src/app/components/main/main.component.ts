import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TellingUSService } from 'src/app/Services/telling-us.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  
  private apiUrl= environment.apiUrl;
  formData: any = {}; 
  Opinions: any[] = [];

  
  constructor(private tech: TellingUSService, private http: HttpClient){
    
  }
  ngOnInit(): void {
    this.getAllOpinions()
  }


  getAllOpinions() {
    this.tech.getAllOpinions().subscribe((res: any) => {
      this.Opinions = res;
    });
  }

  submitTechForm(): void {
    // Send form data to API
    this.http.post(`${this.apiUrl}TellingAboutUs/CreateOpinion`, this.formData)
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
