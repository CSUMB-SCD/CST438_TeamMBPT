import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class FileUploadService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  submissionUpload(token: string, content: string, language_id: number, challenge_id: string): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(environment.submission_url + challenge_id, {
      content: content,
      language_id: language_id
    }, {
      headers: headers
    }).catch(() => {
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }
}
