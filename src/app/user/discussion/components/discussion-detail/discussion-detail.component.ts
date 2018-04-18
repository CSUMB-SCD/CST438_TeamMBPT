import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {Discussion, DiscussionService} from '../../../services/discussion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css'],
  providers: [ DiscussionService ]
})
export class DiscussionDetailComponent implements OnInit {
  discussion: Discussion;

  constructor(
    private route: ActivatedRoute,
    private service: DiscussionService) { }

  ngOnInit() {
    this.discussion = null;
    this.route.params.forEach(param => {
      this.service.query_id(AuthGuard.getAccessToken(), param.id).subscribe(object => {
        this.discussion = object;
        console.log(this.discussion);
      });
    });
  }
}
