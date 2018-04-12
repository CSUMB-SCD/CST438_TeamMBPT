import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class DiscussionService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  getDiscussion(token: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.discussion_url, {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }

  createDiscussion(token: string, body: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(environment.discussion_url, body,  {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }
}
