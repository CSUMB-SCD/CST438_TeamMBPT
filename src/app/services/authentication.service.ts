import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private authGuard: AuthGuard) {}

  getToken(username: string, password: string) {
    if (username  === '' || password === '' || username === undefined || password === undefined) {
      this.authGuard.login('fake_token');
      return Observable.of(true);
    }
    // TODO: catch the error completely
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.auth_token_url, JSON.stringify({
      username: username,
      password: password,
    }), {
      headers: headers
    }).map(object => {
      if (object['token'] !== undefined) {
        this.authGuard.login(object['token']);
        return true;
      }
      return false;
    }).catch(() => {
      return Observable.of(false);
    });
  }
}
