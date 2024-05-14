import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TrainerService } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  trainers: any[] = [];
  
  imgs:any[]=[]
  urlPic=''
  trainerForm!: FormGroup;
  fileToUpload!: File | null;
  constructor(private trainer: TrainerService,
    private fb: FormBuilder,
    private http: HttpClient,
    private readonly sanitizer: DomSanitizer){
      this.trainerForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        country: ['', Validators.required],
        imageFile: ['', Validators.required]
      });
    }
  ngOnInit(): void {
    this.getAllTrainers()
  }

  // public get safeUrlPic(): SafeUrl {
  //    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlPic); }
     
  getAllTrainers(){
    this.trainer.getAllTrainers().subscribe((res:any)=>{
      this.trainers = res
      console.log(this.trainers);

      
    })
  }

}
