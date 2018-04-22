import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../services/auth-guard.service';
import {Profile, ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ ProfileService ]
})
export class DashboardComponent implements OnInit {
  public profile: Profile;
  color = 'primary';
  mode = 'determinate';
  value = 50;

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
