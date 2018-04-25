import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthGuard} from '../../services/auth-guard.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

export interface Language {
  id: number;
  name: string;
}

export interface Profile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  default_language: Language;
  display_name: string;
  image: string;
}

@Injectable()
export class ProfileService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  public static resizeImage(image: string, size: number): string {
    if (image === null || image === undefined) {
      return '';
    }
    const sizeIndex = image.lastIndexOf('sz=');
    if (sizeIndex >= 0) {
      return image.substring(0, sizeIndex) + 'sz=' + size;
    }
    return '';
  }

  query(token: string): Observable<Profile> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Profile>(environment.profile_url, {
       headers: headers
    }).catch(err => {
      if (err.status === 423) {
        console.log('should not happen anymore');
      }
      this.auth.redirectLogout();
      return Observable.of(null);
    });
  }

  update(token: string, body: any): Observable<Profile> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put<Profile>(environment.profile_url, body, {
      headers: headers
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
