import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../services/auth-guard.service';
import {Profile, ProfileService} from '../services/profile.service';
import {SubmissionService} from '../services/submission.service';
import {SubmissionListDataSource} from '../components/submission-list/submission-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ ProfileService, SubmissionService]
})
export class DashboardComponent implements OnInit {
  public profile: Profile;
  color = 'primary';
  mode = 'determinate';
  value = 50;
  enrollmentDate: string;

  dataSource: SubmissionListDataSource;
  submissionColumns = ['id', 'challenge_id', 'status'];

  constructor(
    private profileService: ProfileService,
    private service: SubmissionService
  ) {
    this.dataSource = new SubmissionListDataSource(this.service);
  }

  ngOnInit() {
    this.profile = null;
    this.enrollmentDate = new Date().toLocaleString();
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = new Profile(object);
      this.profile.changeImageSize(80);
    });
  }
}
