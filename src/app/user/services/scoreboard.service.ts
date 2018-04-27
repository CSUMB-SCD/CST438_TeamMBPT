import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthGuard} from '../../services/auth-guard.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Profile} from './profile.service';

@Injectable()
export class ScoreboardService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  query(token: string): Observable<Profile[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Profile>(environment.scoreboard_url, {
       headers: headers
    }).catch(err => {
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }
}
