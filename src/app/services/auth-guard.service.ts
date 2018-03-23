import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  static getToken(): string {
    return localStorage.getItem('MBPT_ACCESS_TOKEN');
  }

  canActivate(): boolean {
    if (AuthGuard.getToken() === null) {
      this.logout();
      return false;
    }
    return true;
  }

  login(token: string) {
    localStorage.setItem('MBPT_ACCESS_TOKEN', token);
    return this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem('MBPT_ACCESS_TOKEN');
    return this.router.navigate(['/welcome']);
  }
}
