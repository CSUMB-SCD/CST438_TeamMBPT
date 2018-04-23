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

  displayName = new FormControl([Validators.required]);
  username = new FormControl([Validators.required]);
  firstName = new FormControl([Validators.required]);
  lastName = new FormControl([Validators.required]);
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
  selectedLanguage: number;


  constructor(
    private profileService: ProfileService,
    private authGuard: AuthGuard,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.selectedLanguage = 0;
    this.profile = null;
    this.languages = [];
    this.profileService.getLanguages(AuthGuard.getAccessToken()).subscribe(object => {
      this.languages = object as Language[];
    });
    this.resetFormValue();
  }

  resetFormValue() {
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
      this.firstName.setValue(this.profile.first_name);
      this.lastName.setValue(this.profile.last_name);
      this.displayName.setValue(this.profile.display_name);
      this.username.setValue(this.profile.username);
      this.selectedLanguage = this.profile.lang_id;
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
    const body = {};
    if (this.displayName.valid && this.displayName.value !== this.profile.display_name) {
      body['display_name'] = this.displayName.value;
    }
    if (this.firstName.valid && this.firstName.value !== this.profile.first_name) {
      body['first_name'] = this.firstName.value;
    }
    if (this.lastName.valid && this.lastName.value !== this.profile.last_name) {
      body['last_name'] = this.lastName.value;
    }
    if (this.selectedLanguage !== 0 && this.selectedLanguage !== this.profile.lang_id) {
      body['lang_id'] = this.selectedLanguage;
    }
    if (this.username.valid && this.username.value !== this.profile.username) {
      body['username'] = this.username.value;
    }
    if (this.password.valid && this.password.value === this.confirmPassword.value) {
      body['password'] = this.password.value;
    }
    console.log('Updated profile:');
    console.log(body);
    this.profileService.update(AuthGuard.getAccessToken(), body).catch(err => {
      return this.errorHandler(err);
    }).subscribe();
    this.resetFormValue();
  }
}
