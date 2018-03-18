import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  canLoad() {
    console.log('AuthGuard#canLoad called');
    if (this.isLoggedIn) {
      return true;
    }
    return false;
  }
}
