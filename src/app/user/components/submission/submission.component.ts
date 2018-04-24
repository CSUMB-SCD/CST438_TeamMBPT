import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Submission, SubmissionService} from '../../services/submission.service';
import {AuthGuard} from '../../../services/auth-guard.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
  providers: [SubmissionService]
})
export class SubmissionComponent implements OnInit {
  submission: Submission;

  constructor(
    private route: ActivatedRoute,
    private service: SubmissionService) { }

  ngOnInit() {
    this.submission = null;
    this.route.params.forEach(param => {
      this.service.query_id(AuthGuard.getAccessToken(), param.id).subscribe(object => {
        this.submission = object;
      });
    });
  }
}
