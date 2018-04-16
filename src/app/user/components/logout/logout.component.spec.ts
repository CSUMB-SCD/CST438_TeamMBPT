import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import {UserModule} from '../../user.module';
import {AuthenticationService} from '../../../services/authentication.service';
import {AuthGuard} from '../../../services/auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        UserModule
      ],
      providers: [
        AuthenticationService,
        AuthGuard
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthGuard.redirectLogout() when #a tag is clicked', () => {
    const link = fixture.nativeElement.querySelector('a');
    localStorage.setItem('MBPT_ACCESS_TOKEN', 'test123');
    link.click();
    fixture.whenStable().then(() => {
      expect(localStorage.getItem('MBPT_ACCESS_TOKEN')).toBe(null);
    });
  });
});
