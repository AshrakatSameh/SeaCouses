import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-terms',
  templateUrl: './medical-terms.component.html',
  styleUrls: ['./medical-terms.component.css']
})
export class MedicalTermsComponent {

  constructor(private router: Router) {}

  navigateToCheck(): void {
    // Navigate to '/check' using the Router service
    this.router.navigate(['booking']);
  }

  

}
