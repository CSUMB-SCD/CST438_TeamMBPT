import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {UserModule} from '../../user.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from '../../../services/authentication.service';
import {AuthGuard} from '../../../services/auth-guard.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        RouterTestingModule
      ],
      providers: [
        AuthenticationService,
        AuthGuard
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
