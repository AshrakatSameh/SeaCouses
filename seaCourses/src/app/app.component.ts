import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seaCourses';

  stripePromise = loadStripe('pk_test_51PF5FMAG762v7YxJqAKEBMwN0frg1nEVfs7uTghZQSE49hfjnCNteOCS2gFSda3sylwYIXHqbgTr79YvujJ6pLPI00WUunxt5i');

}
