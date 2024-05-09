import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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


}
