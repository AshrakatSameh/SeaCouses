import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrls: ['./ielts.component.css']
})
export class IELTSComponent {

  constructor(private router: Router) {}

  navigateToCheck(): void {
    // Navigate to '/check' using the Router service
    this.router.navigate(['check']);
  }

}
