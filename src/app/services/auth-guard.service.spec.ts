import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AuthGuard]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
