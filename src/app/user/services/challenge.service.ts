import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  query(jwt: string, id: string = '') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt
    });
    return this.http.get(environment.challenge_url + id, {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }
}
