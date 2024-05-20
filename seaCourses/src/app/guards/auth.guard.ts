import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const toast = inject(NgToastService);
  if(authService.isLoggedIn()){
    return true;
  }
  else{
    toast.error({detail:'ERROR', summary: 'Please login first!'})
    router.navigate(['login'])
    return false;
  }


  // if(inject(AuthService).isLoggedIn()){
  //   return true;
  // }
  // alert("You should log in first");
  // return false;
};
