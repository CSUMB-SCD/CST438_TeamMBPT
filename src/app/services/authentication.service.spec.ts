import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthGuard} from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AuthenticationService, AuthGuard]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true after entering the correct user credential',
    inject([AuthenticationService], (service: AuthenticationService) => {
      service.getToken('root', 'mbpt').subscribe(result => {
        expect(result).toBe(true);
      });
  }));

  it('should return false after entering the incorrect user credential',
    inject([AuthenticationService], (service: AuthenticationService) => {
      service.getToken('root', '!mbpt').subscribe(result => {
        expect(result).toBe(false);
      });
    }));
});
