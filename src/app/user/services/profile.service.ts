import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthGuard} from '../../services/auth-guard.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  query(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.profile_url, {
       headers: headers
    }).catch(err => {
      if (err.status === 423) {
        return this.auth.redirectRegister(err.error);
      }
      return this.auth.redirectLogout();
    });
  }

  getLanguages(token: string): Observable<Language[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Language[]>(environment.language_url, {
      headers: headers
    });
  }
}

export interface Language {
  name: string;
  icon: string;
}

export interface Profile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  title: string;
  content: string;
  lang: string;
  lang_icon: string;
  display_name: string;
}
