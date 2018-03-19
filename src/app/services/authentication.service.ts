import { Injectable } from '@angular/core';
import {AuthGuard} from './auth-guard.service';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private authGuard: AuthGuard) { }

  getToken(username: string, password: string) {
    this.http.post('/api/auth/mbpt', JSON.stringify({
      username: username,
      password: password
    })).subscribe(object => {
      console.log(object);
      if (object['user_id'] !== undefined) {
        this.authGuard.login();
      }
    });
  }
}
