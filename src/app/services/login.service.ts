import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  google() {
    return this.http.post('/auth/google', '');
  }

  user() {
    return this.http.post('/user', '');
  }
}
