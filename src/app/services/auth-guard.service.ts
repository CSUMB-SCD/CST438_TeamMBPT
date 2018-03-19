import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  private loggedIn: boolean;

  constructor(private router: Router) {
    this.loggedIn = false;
  }

  canLoad(): boolean {
    console.log('AuthGuard#canLoad called');
    if (this.loggedIn) {
      return true;
    }
    return false;
  }

  login(): void {
    console.log('AuthGuard#login called');
    this.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    console.log('AuthGuard#logout called');
    this.loggedIn = false;
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
