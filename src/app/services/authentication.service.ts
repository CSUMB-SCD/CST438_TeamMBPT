import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private authGuard: AuthGuard) {}

  getToken(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.auth_token_url, JSON.stringify({
      username: username,
      password: password,
    }), {
      headers: headers
    }).map(object => {
      if (object['access_token'] !== undefined) {
        this.authGuard.redirectLogin(object['access_token']);
        return true;
      }
      return false;
    }).catch(() => {
      return Observable.of(false);
    });
  }

  redirectGoogleAuth() {
    this.http.get(environment.auth_google_url).subscribe(object => {
      window.location.href = object['url'];
    });
  }

  getUser(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<User>(environment.user_url, {
      headers: headers
    });
  }

  register(data: any) {
    const token = AuthGuard.getAccessToken();
    let headers: HttpHeaders;
    if (token !== undefined && token !== null && token !== '') {
      headers = new HttpHeaders({
        'Content-Type': 'application/json' ,
        'Authorization': 'Bearer ' + token
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
    return this.http.post<User>(environment.user_url, JSON.stringify(data), {
      headers: headers
    }).subscribe(user => {
      if (token !== undefined && token !== null && token !== '') {
        return this.authGuard.redirectLogin(token);
      } else {
        return this.getToken(data.username, data.password).subscribe();
      }
    });
  }
}
