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
        console.log('should not happen anymore');
      }
      return this.auth.redirectLogout();
    });
  }

  update(token: string, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put(environment.profile_url, body, {
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

export interface Language {
  id: number;
  name: string;
}

export class Profile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  lang_id: number;
  display_name: string;
  image: string;

  constructor(object) {
    this.username = object['username'];
    this.first_name = object['first_name'];
    this.last_name = object['last_name'];
    this.email = object['email'];
    this.lang_id = object['lang_id'];
    this.display_name = object['display_name'];
    this.image = object['image'];
  }

  public changeImageSize(size: number) {
    if (this.image === null || this.image === undefined) {
      return;
    }
    const sizeIndex = this.image.lastIndexOf('sz=');
    if (sizeIndex >= 0) {
      this.image = this.image.substring(0, sizeIndex) + 'sz=' + size;
    }
  }
}
