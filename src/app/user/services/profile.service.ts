import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthGuard} from '../../services/auth-guard.service';
import {environment} from '../../../environments/environment';

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
    }).catch(() => {
       return this.auth.logout();
    });
  }
}

export interface Profile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  title: string;
  content: string;
}
