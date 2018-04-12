import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuard} from '../../services/auth-guard.service';

@Injectable()
export class AnnouncementService {

  constructor(
    private http: HttpClient,
    private auth: AuthGuard) { }

  get_announcements(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.announcement_url, {
      headers: headers
    }).catch(() => {
      return this.auth.logout();
    });
  }
}
