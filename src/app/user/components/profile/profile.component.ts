import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Language, Profile, ProfileService} from '../../services/profile.service';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  public profile: Profile;
  public languages: Language[];

  displayName = new FormControl();
  username = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  password = new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
    ]);
  confirmPassword = new FormControl('',
    [
      Validators.required
    ]);
  country = new FormControl();
  hidePassword = true;


  constructor(
    private profileService: ProfileService,
    private authGuard: AuthGuard,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.profile = null;
    this.languages = [];
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
      this.firstName.setValue(this.profile.first_name);
      this.lastName.setValue(this.profile.last_name);
      this.displayName.setValue(this.profile.display_name);
    });
    this.profileService.getLanguages(AuthGuard.getAccessToken()).subscribe(object => {
      this.languages = object as Language[];
    });
  }

  getFirstNameErrorMessage() {
    return this.lastName.hasError('required') ? 'First Name cannot be empty' : '';
  }

  getLastNameErrorMessage() {
    return this.firstName.hasError('required') ? 'First Name cannot be empty' : '';
  }

  getDisplayNameErrorMessage() {
    return this.displayName.hasError('required') ? 'First Name cannot be empty' : '';
  }

  getUsernameErrorMessage() {
    return this.username.hasError('usernameExist') ? 'This username has been registered.' :
      '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minlength') ? 'The minimum length of the password is 8 characters.' :
        '';
  }

  errorHandler(err): Observable<boolean> {
    if (err.error === 'username') {
      this.username.setErrors({
        usernameExist: true
      });
    } else {
      this.authGuard.redirectLogout();
    }
    return Observable.of(false);
  }

  submit() {
    console.log('clicked');
  }
}
