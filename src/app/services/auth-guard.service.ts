import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  isLoggedIn: boolean;

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  canLoad() {
    console.log('AuthGuard#canLoad called');
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
