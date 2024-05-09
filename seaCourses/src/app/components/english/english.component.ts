import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {

  constructor(private router: Router) {}

  navigateToCheck(): void {
    // Navigate to '/check' using the Router service
    this.router.navigate(['check']);
  }
}
