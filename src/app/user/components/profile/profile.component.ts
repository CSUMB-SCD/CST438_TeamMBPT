import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Profile, ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profile = null;
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
    });
  }

}
