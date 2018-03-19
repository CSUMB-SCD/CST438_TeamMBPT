import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  isLoggedIn: boolean;

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  canLoad(): boolean {
    console.log('AuthGuard#canLoad called');
    if (this.isLoggedIn) {
      return true;
    }
    return false;
  }

  login(): void {
    console.log('AuthGuard#login called');
    this.isLoggedIn = true;
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    console.log('AuthGuard#logout called');
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
