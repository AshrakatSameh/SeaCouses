import { Component, OnDestroy, OnInit } from '@angular/core';
import { StripeService } from 'ngx-stripe';



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {



  constructor() {

   }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }




 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51PF5FMAG762v7YxJqAKEBMwN0frg1nEVfs7uTghZQSE49hfjnCNteOCS2gFSda3sylwYIXHqbgTr79YvujJ6pLPI00WUunxt5i',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51PF5FMAG762v7YxJqAKEBMwN0frg1nEVfs7uTghZQSE49hfjnCNteOCS2gFSda3sylwYIXHqbgTr79YvujJ6pLPI00WUunxt5i',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}