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

  submissionUpload(token: string, file: File, challenge_id: string): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
      'Content-Disposition': 'Content-Disposition: form-data;filename="' + file.name + '"'
    });
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.submission_url + challenge_id, formData, {
      headers: headers
    }).catch(() => {
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }
}
