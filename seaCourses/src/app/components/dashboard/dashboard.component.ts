import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'ng-angular-popup';
import { BookingService } from 'src/app/Services/booking.service';
import { ContactSupportService } from 'src/app/Services/contact-support.service';
import { PhotoService } from 'src/app/Services/photo.service';
import { TellingUSService } from 'src/app/Services/telling-us.service';
import { TrainerService } from 'src/app/Services/trainer.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  trainers: any[] = [];
  photos: any[]=[];
  // myForm!: FormGroup ;
  contactSupport: any[] = [];
  Opinions:any[] = [];
    formData: any = {}; // Object to hold form data


  private tenp = environment.apiUrl + 'Trainer';
  private apiUrl= environment.apiUrl;


  trainerForm!: FormGroup;
  opinionForm!:FormGroup;
  fileToUpload!: File | null;
  traineeArray: any[] = [];

  ngOnInit(): void {
    this.getAllTrainers();
    this.getAllContactSupport();
    this.getAllTrainee();
    this.getAllPhotos();
    this.getAllOpinions();
  }

  constructor(
    private trainer: TrainerService,
    private fb: FormBuilder,
    private http: HttpClient,
    private tech: ContactSupportService,
    private book: BookingService,
    private photo: PhotoService,
    private tellingService :TellingUSService
  ) {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      country: ['', Validators.required],
      rate: ['', Validators.required],
      imageFile: ['', Validators.required],
    });

    this.opinionForm = this.fb.group({
      opinion: ['', Validators.required],
      sender: ['', Validators.required],
      
    });
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    if (files && files.length > 0) {
      this.fileToUpload = files[0];
      console.log(this.fileToUpload); // Log the selected file to verify
    } else {
      console.error('No file selected');
    }
  }
  // contact tech support
  getAllContactSupport() {
    this.tech.getAllTrainers().subscribe((res: any) => {
      this.contactSupport = res;
      console.log(this.contactSupport);
    });
  }

  deleteContactSupportById(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this record?'
    );

    // If the user confirmed the deletion
    if (confirmed) {
      // Proceed with deletion
      this.tech.deletecontactSupportsById(id).subscribe(
        () => {
          console.log('Record deleted successfully');
          // Refresh data after successful deletion
          this.getAllContactSupport();
        },
        (error) => {
          console.error('Error deleting record:', error);
        }
      );
    } else {
      // User canceled the deletion
      console.log('Deletion canceled');
    }
  }

  // Fot Trainees
  getAllTrainee() {
    this.book.getAllTrainees().subscribe((res: any) => {
      this.traineeArray = res;
      console.log(res);
    });
  }
  deleteTraineeById(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this record?'
    );

    // If the user confirmed the deletion
    if (confirmed) {
      // Proceed with deletion
      this.book.deletetraineesById(id).subscribe(
        () => {
          console.log('Record deleted successfully');
          // Refresh data after successful deletion
          this.getAllContactSupport();
        },
        (error) => {
          console.error('Error deleting record:', error);
        }
      );
    } else {
      // User canceled the deletion
      console.log('Deletion canceled');
    }
  }

  // Our photos
  getAllPhotos() {
    this.photo.getAllPhotos().subscribe((res: any) => {
      this.photos = res;

      console.log(this.photos);
    });
  }

  getAllTrainers() {
    this.trainer.getAllTrainers().subscribe((res: any) => {
      this.trainers = res;

      console.log(this.trainers);
    });
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
      formData.append('imageFile', imageFile);
    } else {
      console.error('One or more form fields are null');
      return;
    }

    formData.append('imageFile', this.fileToUpload!); // Assert non-null with !

    this.http.post<any>(
      this.tenp + 'Trainer/addTrainer',
      formData
    );
    this.http.post<any>(this.tenp + '/AddTrainer', formData).subscribe(
      (response) => {
        alert('Done');
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
    const confirmed = window.confirm(
      'Are you sure you want to delete this record?'
    );

    // If the user confirmed the deletion
    if (confirmed) {
      // Proceed with deletion
      this.trainer.deletetrainersById(id).subscribe(
        () => {
          console.log('Record deleted successfully');
          this.getAllTrainers();
        },
        (error) => {
          console.error('Error deleting record:', error);
        }
      );
    } else {
      // User canceled the deletion
      console.log('Deletion canceled');
    }
  }

  submitOpinionForm(): void {
    // Send form data to API
    this.http.post(`${this.apiUrl}TellingAboutUs/CreateOpinion`, this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
        alert("Send successfully")
        // Optionally, reset the form after successful submission
        this.resetForm();
      }, error => {
        console.error('Error submitting form:', error);
      });

  }

  resetForm(): void {
    // Clear form data
    this.formData = {};
  }

  getAllOpinions() {
    this.tellingService.getAllOpinions().subscribe((res: any) => {
      this.Opinions = res;
    });
  }

  
  deleteOpinionById(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this record?'
    );

    // If the user confirmed the deletion
    if (confirmed) {
      // Proceed with deletion
      this.tellingService.deleteOpinionById(id).subscribe(
        () => {
          console.log('Record deleted successfully');
          this.getAllOpinions();
        },
        (error) => {
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

  showPhotosList = false;
  showAddPhoto= false;
  showDeletePhoto = false;

  showTraineeList = false;
  showAddTrainee = false;
  showDeleteTrainee = false;

  showCoursesList = false;
  showAddCourses = false;
  showDeleteCourses = false;

  showTellingUsList = false;
  showAddTellingUs = false;
  showDeleteTellingUs = false;

  showTrainerListHandler(): void {
    this.showTrainerList = true;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showAddTrainerHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = true;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showDeleteTrainerHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = true;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showTraineeListHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = true;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showAddTraineeHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = true;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showDeleteTraineeHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = true;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showCoursesListHandler(): void {
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showPhotosList = false;
    this.showAddPhoto= false;
    this.showDeletePhoto = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = true;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
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

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showTellingUsListHandler() :void{
    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = true;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = false;
  }

  showAddTellingUsHandler():void{

    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = true;
    this.showDeleteTellingUs = false;
    
  }

  showDeleteTellingUsHandler() :void{

    this.showTrainerList = false;
    this.showAddTrainer = false;
    this.showDeleteTrainer = false;

    this.showTraineeList = false;
    this.showAddTrainee = false;
    this.showDeleteTrainee = false;

    this.showCoursesList = false;
    this.showAddCourses = false;
    this.showDeleteCourses = false;

    this.showTellingUsList = false;
    this.showAddTellingUs = false;
    this.showDeleteTellingUs = true;

  }


}
