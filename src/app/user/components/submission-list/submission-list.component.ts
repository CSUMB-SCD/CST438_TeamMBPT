import { Component, OnInit } from '@angular/core';
import {Submission, SubmissionService} from '../../services/submission.service';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css'],
  providers: [SubmissionService]
})
export class SubmissionListComponent implements OnInit {
  dataSource: SubmissionListDataSource;
  displayedColumns = ['id', 'date', 'challenge_id', 'status', 'cpu', 'lang'];

  constructor(
    private service: SubmissionService
  ) {
    this.dataSource = new SubmissionListDataSource(this.service);
  }

  ngOnInit() { }
}

export class SubmissionListDataSource extends DataSource<any> {

  constructor(private service: SubmissionService) {
    super();
  }

  connect(): Observable<Submission[]> {
    return this.service.getAllSubmissions(AuthGuard.getAccessToken());
  }

  disconnect() { }
}
