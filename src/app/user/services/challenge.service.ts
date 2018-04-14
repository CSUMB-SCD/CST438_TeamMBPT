import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';
import {Observable} from 'rxjs/Observable';

export interface Challenge {
  title: string;
  challenge_id: string;
  description: string;
  submission_count: number;
  accepted_count: number;
  created: string;
  publisher: string;
  content: string;
}

@Injectable()
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  query(token: string): Observable<Challenge[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Challenge[]>(environment.challenge_url, {
      headers: headers
    }).catch(() => {
      this.auth.logout();
      return Observable.of(null);
    });
  }

  query_id(token: string, id: string): Observable<Challenge> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Challenge>(environment.challenge_url + id, {
      headers: headers
    }).catch(() => {
      this.auth.logout();
      return Observable.of(null);
    });
  }
}
