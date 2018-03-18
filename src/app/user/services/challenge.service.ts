import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChallengeService {

  constructor(private http: HttpClient) { }

  get_Challenges() {
    return this.http.get('/api/challenge');
  }
}
