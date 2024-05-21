import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TellingUSService } from 'src/app/Services/telling-us.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

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

}
