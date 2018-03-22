import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { HttpClient } from '@angular/common/http';
import { JSEncrypt } from 'jsencrypt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
    // TODO: catch the error completely
    return this.http.post('/api/auth/mbpt', JSON.stringify({
      unm: username,
      pwd: this.encrypt.encrypt(password)
    })).map(object => {
      if (object['token'] !== undefined) {
        this.authGuard.login(object['token']);
        return true;
      }
      return false;
    }).catch(() => {
      return Observable.of(false);
    });
  }
}
