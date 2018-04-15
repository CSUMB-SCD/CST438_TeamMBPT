import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  static getAccessToken(): string {
    return localStorage.getItem('MBPT_ACCESS_TOKEN');
  }

  canActivate(): boolean {
    if (AuthGuard.getAccessToken() === null) {
      this.redirectLogout();
      return false;
    }
    return true;
  }

  redirectLogin(accessToken: string) {
    localStorage.setItem('MBPT_ACCESS_TOKEN', accessToken);
    return this.router.navigate(['/dashboard']);
  }

  redirectLogout() {
    localStorage.removeItem('MBPT_ACCESS_TOKEN');
    return this.router.navigate(['/welcome']);
  }

  redirectRegister(params: any) {
    return this.router.navigate(['/register', params]);
  }
}
