import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/Services/booking.service';
import { ContactSupportService } from 'src/app/Services/contact-support.service';
import { TrainerService } from 'src/app/Services/trainer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  trainers: any[] = [];
  // myForm!: FormGroup ;
  contactSupport:any []=[];

  private tenp = environment.apiUrl + 'Trainer';

  trainerForm!: FormGroup;
  fileToUpload!: File | null;
  traineeArray: any[] = [];


  ngOnInit(): void {
    this.getAllTrainers();
    this.getAllContactSupport();
    this.getAllTrainee();
  }

  constructor(private trainer: TrainerService,
    private fb: FormBuilder,
    private http: HttpClient,
    private tech: ContactSupportService,
    private book: BookingService
  ){

    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price:['', Validators.required],
      country: ['', Validators.required],
      rate:['' , Validators.required],
      imageFile: ['', Validators.required]
    });

  
 
  }
  
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    if (files && files.length > 0) {
      this.fileToUpload = files[0];
      console.log(this.fileToUpload); // Log the selected file to verify
      
    } 
    else {
      console.error('No file selected');
    }
  }
  // contact tech support
  getAllContactSupport(){
    this.tech.getAllTrainers().subscribe((res:any)=>{
      this.contactSupport = res
      console.log(this.contactSupport);   
    })
  }

  deleteContactSupportById(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
      
    // If the user confirmed the deletion
    if (confirmed) {
        // Proceed with deletion
        this.tech.deletecontactSupportsById(id).subscribe(
            () => {
                console.log('Record deleted successfully');
                // Refresh data after successful deletion
                this.getAllContactSupport();
            },
            error => {
                console.error('Error deleting record:', error);
            }
        );
    } else {
        // User canceled the deletion
        console.log('Deletion canceled');
    }
  }


  // Fot Trainees
  getAllTrainee(){
    this.book.getAllTrainees().subscribe((res:any)=>{
      this.traineeArray = res
      console.log(res)
    })
  }
  deleteTraineeById(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
      
    // If the user confirmed the deletion
    if (confirmed) {
        // Proceed with deletion
        this.book.deletetraineesById(id).subscribe(
            () => {
                console.log('Record deleted successfully');
                // Refresh data after successful deletion
                this.getAllContactSupport();
            },
            error => {
                console.error('Error deleting record:', error);
            }
        );
    } else {
        // User canceled the deletion
        console.log('Deletion canceled');
    }
  }

  getAllTrainers(){
    this.trainer.getAllTrainers().subscribe((res:any)=>{
      this.trainers = res

      console.log(this.trainers);

      
    })
  }

  
  onSubmit() {
    if (!this.fileToUpload) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    const name = this.trainerForm.get('name')!.value;
    const description = this.trainerForm.get('description')!.value;
    const country = this.trainerForm.get('country')!.value;
    const rate = this.trainerForm.get('rate')!.value;
    const price = this.trainerForm.get('price')!.value;
    const imageFile = this.trainerForm.get('imageFile')!.value;   
    if (name && description && country) {
      formData.append('name', name);
      formData.append('description', description);
      formData.append('country', country);
      formData.append('rate', rate);
      formData.append('price', price);
      formData.append('imageFile', imageFile)
    } else {
      console.error('One or more form fields are null');
      return;
    }
  
    formData.append('imageFile', this.fileToUpload!); // Assert non-null with !
  
    this.http.post<any>('http://localhost:5000/api/Trainer/addTrainer', formData)
    this.http.post<any>(this.tenp + '/AddTrainer', formData)
      .subscribe(
        (response) => {
          alert("Done")
          console.log('Trainer created successfully:', response);
          // Reset form after successful submission
          this.trainerForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.error('Error creating trainer:', error.error);
          // Handle error
        }
      );
  }


  
  
deletenewsById(id: number) {
  const confirmed = window.confirm('Are you sure you want to delete this record?');
    
  // If the user confirmed the deletion
  if (confirmed) {
      // Proceed with deletion
      this.trainer.deletetrainersById(id).subscribe(
          () => {
              console.log('Record deleted successfully');
              this.getAllTrainers();
          },
          error => {
              console.error('Error deleting record:', error);
          }
      );
  } else {
      // User canceled the deletion
      console.log('Deletion canceled');
  }
}




//   onSubmitTrainer() {
//     if (this.myForm.valid) {
//       const newtrainerItem = this.myForm.value;
//       this.trainer.posttrainers(newtrainerItem).subscribe(
//           () => {
//             alert('trainer added successfully')
//               console.log('trainer added successfully');
//               // Optionally, refresh the news list or navigate back to the list
//               this.getAllTrainers(); // Function to refresh the news list
//           },
//           error => {
//               console.error('Error adding news item:', error);
//           }
//       );
//   } else {
//       console.error();
//   }
// }


  showTrainerList = false;
  showAddTrainer = false;
  showDeleteTrainer = false;

  showTraineeList = false;
  showAddTrainee = false;
  showDeleteTrainee = false;

  showCoursesList = false;
  showAddCourses = false;
  showDeleteCourses = false;

  showTrainerListHandler(): void {
    this.showTrainerList = true;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }


  showAddTrainerHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = true;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }

  showDeleteTrainerHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = true;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }


  showTraineeListHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = true;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }

  showAddTraineeHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = true;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }

  showDeleteTraineeHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = true;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }

  showCoursesListHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = true;
    this.showAddCourses = false;
    this.showDeleteCourses = false;
  }

  // showAddCourseHandler(): void {
  //   this.showTrainerList = false;
  //   this.showAddTrainer = false;
  //   this.showDeleteTrainer = false;

  //   this.showTraineeList = false;
  //   this.showAddTrainee = false;
  //   this.showDeleteTrainee = false;

  //   this.showCoursesList = false;
  //   this.showAddCourses = true;
  //   this.showDeleteCourses = false;
  // }

  showDeleteCourseHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = true;
  }


}
