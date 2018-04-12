import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class DiscussionService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  getDiscussion(jwt: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt
    });
    return this.http.get(environment.discussion_url, {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }

  createDiscussion(jwt: string, body: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt
    });
    return this.http.post(environment.discussion_url, body,  {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }
}
