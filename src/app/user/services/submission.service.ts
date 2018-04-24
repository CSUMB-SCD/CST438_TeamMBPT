import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubmissionService {

  constructor(
    private http: HttpClient) { }

  getAllSubmissions(token: string): Observable<Submission[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Submission[]>(environment.submission_list_url, {
      headers: headers
    });
  }

  query_id(token: string, id: string): Observable<Submission> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Submission>(environment.submission_url + id, {
      headers: headers
    });
  }
}

export interface Submission {
  id: number;
  created: string;
  owner: string;
  status: string;
  challenge_id: string;
  content: string;
  language: {
    id: number;
    name: string;
  };
}
