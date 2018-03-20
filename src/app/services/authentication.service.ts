import { Injectable } from '@angular/core';
import {AuthGuard} from './auth-guard.service';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { JSEncrypt } from 'jsencrypt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  private encrypt: JSEncrypt;

  constructor(
    private http: HttpClient,
    private authGuard: AuthGuard) {
    this.encrypt = new JSEncrypt();
    this.encrypt.setPublicKey(environment.secret);
  }

  getToken(username: string, password: string) {
    this.http.post('/api/auth/mbpt', JSON.stringify({
      unm: username,
      pwd: this.encrypt.encrypt(password)
    })).subscribe(object => {
      console.log(object);
      if (object['user_id'] !== undefined) {
        this.authGuard.login();
      }
    });
  }
}
