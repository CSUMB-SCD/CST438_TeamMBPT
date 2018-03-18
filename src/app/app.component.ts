import { Component } from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Monterey Bay Programming Team';

  constructor(public authGuard: AuthGuard) {
  }

  login(): void {
    this.authGuard.isLoggedIn = true;
  }

  logout(): void {
    this.authGuard.isLoggedIn = false;
  }

  toggleLogin() {
    if (this.authGuard.isLoggedIn) {
      this.logout();
    } else {
      this.login();
    }
  }
}
