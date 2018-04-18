import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Profile, ProfileService} from '../../services/profile.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  firstName = new FormControl();
  lastName = new FormControl();
  displayName = new FormControl();
  language = new FormControl();
  country = new FormControl();


  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = null;
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
      this.firstName.setValue(this.profile.first_name);
      this.lastName.setValue(this.profile.last_name);
      this.displayName.setValue(this.profile.display_name);
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

  submit() {
    console.log('clicked');
  }
}
