import { Component } from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Monterey Bay Programming Team';
  isLoggedIn: boolean;

  constructor(private authGuard: AuthGuard) {
    this.isLoggedIn = this.authGuard.isLoggedIn;
  }

  login(): void {
    this.isLoggedIn = true;
    this.authGuard.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.authGuard.isLoggedIn = false;
  }

  toggleLogin() {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      this.login();
    }
  }
}
