import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../services/auth-guard.service';
import {Profile, ProfileService} from '../services/profile.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ ProfileService ]
})
export class DashboardComponent implements OnInit {
  public profile: Profile;

  constructor(
    private profileService: ProfileService,
    private authGuard: AuthGuard,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.profile = null;
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
    });
  }
}
