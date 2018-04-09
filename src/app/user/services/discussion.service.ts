import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class DiscussionService {

  constructor(private http: HttpClient) { }

  get_discussion(jwt: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt
    });
    return this.http.get(environment.discussion_url, {
      headers: headers
    });
  }
}
