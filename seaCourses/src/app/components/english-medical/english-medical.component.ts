import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english-medical',
  templateUrl: './english-medical.component.html',
  styleUrls: ['./english-medical.component.css']
})
export class EnglishMedicalComponent {

  constructor(private router: Router) {}

  navigateToCheck(): void {
    // Navigate to '/check' using the Router service
    this.router.navigate(['booking']);
  }

}
