import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

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
    const token = AuthGuard.getAccessToken();
    if (token !== undefined && token !== null && token !== '') {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'access_token': token
      });
      this.http.post(environment.auth_revoke_token_url, '', {
        headers: headers
      }).subscribe();
      localStorage.removeItem('MBPT_ACCESS_TOKEN');
    }
    return this.router.navigate(['/welcome']);
  }
}
