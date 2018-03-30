import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DiscussionService {

  constructor(private http: HttpClient) { }

  get_Discussion() {
    return this.http.get('/api/discussion');
  }
}
