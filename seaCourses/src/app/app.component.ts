import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seaCourses';

  constructor(private router: Router) {}


  navigateToCheck(): void {
    // Navigate to '/check' using the Router service
    this.router.navigate(['check']);
  }
}
