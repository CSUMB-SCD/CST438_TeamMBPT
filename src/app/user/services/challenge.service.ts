import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ChallengeService {

  constructor(private http: HttpClient) { }

  get_Challenges(jwt: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + jwt
    });
    return this.http.get(environment.challenge_url, {
      headers: headers
    });
  }
}
