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

  login(token: string): void {
    localStorage.setItem('MBPT_ACCESS_TOKEN', token);
    this.router.navigate(['/dashboard']).then(() => {
      console.log('login with token:' + token);
    });
  }

  logout(): void {
    this.router.navigate(['/welcome']).then(() => {
      console.log('logout');
      localStorage.removeItem('MBPT_ACCESS_TOKEN');
    });
  }
}
