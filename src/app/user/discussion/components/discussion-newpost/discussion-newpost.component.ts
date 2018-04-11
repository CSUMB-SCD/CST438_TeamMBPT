import { Component, OnInit } from '@angular/core';
import {DiscussionService} from '../../../services/discussion.service';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discussion-newpost',
  templateUrl: './discussion-newpost.component.html',
  styleUrls: ['./discussion-newpost.component.css'],
  providers: [DiscussionService]
})
export class DiscussionNewpostComponent implements OnInit {
  public editorContent: string;
  public title: string;

  constructor(
    private service: DiscussionService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.service.createDiscussion(AuthGuard.getToken(), JSON.stringify({
      'title': this.title,
      'content': this.editorContent
    })).subscribe(() => {
      this.router.navigate(['/discussion/']);
    });
  }
}
