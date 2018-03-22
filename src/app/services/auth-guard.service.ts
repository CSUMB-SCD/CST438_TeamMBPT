import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  token: string;

  constructor(private router: Router) {
    this.token = document.cookie;
  }

  canLoad(): boolean {
    return this.token !== '';
  }

  login(token: string): void {
    this.token = token;
    document.cookie = token;
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.token = '';
    this.router.navigate(['']);
  }
}
