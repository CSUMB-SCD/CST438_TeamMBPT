import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';
import {Observable} from 'rxjs/Observable';

export interface Comment {
  id: number;
  content: string;
  created: string;
  display_name: string;
  image: string;
  upvotes: number;
}

export interface Discussion {
  id: number;
  title: string;
  created: string;
  view_count: number;
  upvotes: number;
  comments: any;
  content: Comment[];
  display_name: string;
  image: string;
}

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
      return this.auth.redirectLogout();
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
      return this.auth.redirectLogout();
    });
  }

  query_id(token: string, id: string): Observable<Discussion> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Discussion>(environment.discussion_url + id, {
      headers: headers
    }).catch(() => {
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }
}
