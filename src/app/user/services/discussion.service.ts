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
  upvoted: boolean;
  parent_comment: Comment;
}

export interface Discussion {
  id: number;
  title: string;
  created: string;
  view_count: number;
  upvotes: number;
  comments: Comment[];
  content: string;
  display_name: string;
  image: string;
  upvoted: boolean;
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

  createComment(token: string, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(environment.comment_url, body,  {
      headers: headers
    }).catch(() => {
      return this.auth.redirectLogout();
    });
  }

  query_id(token: string, id: any): Observable<Discussion> {
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

  upvoteDiscussion(token: string, id: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(environment.discussion_url + id + '/upvote', '', {
      headers: headers
    }).catch((err) => {
      console.log(err);
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }

  upvoteComment(token: string, id: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(environment.comment_url + id + '/upvote', '', {
      headers: headers
    }).catch((err) => {
      console.log(err);
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }
}
