import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authService= inject(AuthService);
  router = inject(Router);
  toast= inject(NgToastService)
  

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout = () => {
    this.authService.logout();
    // this.toast.success({detail:"SUCCESS",summary: 'logged out', duration: 1000});
    // this.toast.success({
    //   detail: "Logout success",
    //   summary: "You have been successfully logged out.",
    //   duration: 5000, // duration in milliseconds
    // });
    this.router.navigate(['login']);
  };
}
