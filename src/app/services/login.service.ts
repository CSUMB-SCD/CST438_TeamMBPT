import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient) { }

  redirect() {
    this.http.get('/api/auth/google/url').subscribe(object => {
      window.location.href = object['url'];
    });
  }

  user() {
    return this.http.post('/api/user', '');
  }
}
