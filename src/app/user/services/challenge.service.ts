import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class ChallengeService {
  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  query(token: string, id: string = '') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.challenge_url + id, {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }
}
