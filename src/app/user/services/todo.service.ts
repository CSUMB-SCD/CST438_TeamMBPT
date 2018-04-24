import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class TodoService {

  constructor(
    private http: HttpClient) { }

  query(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.todo_url, {
      headers: headers
    });
  }
}
