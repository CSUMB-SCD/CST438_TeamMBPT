import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {Discussion, DiscussionService} from '../../../services/discussion.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css'],
  providers: [ DiscussionService ],
  encapsulation: ViewEncapsulation.None
})
export class DiscussionDetailComponent implements OnInit {
  public editorContent: string;
  discussion: Discussion;

  constructor(
    private route: ActivatedRoute,
    private service: DiscussionService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.discussion = null;
    this.route.params.forEach(param => {
      this.service.query_id(AuthGuard.getAccessToken(), param.id).subscribe(object => {
        this.discussion = object;
      });
    });
  }

  submit() {
    this.service.createComment(AuthGuard.getAccessToken(), {
      content: this.editorContent,
      discussion: this.discussion.id
    }).subscribe(() => {
      this.service.query_id(AuthGuard.getAccessToken(), this.discussion.id).subscribe(object => {
        this.discussion = object;
      });
    });
    this.snackBar.open('Comment Submitted!', 'Okay', {
      duration: 1500,
    });
    this.editorContent = '';
  }

  upvoteDiscussion() {
    this.discussion.upvoted = !this.discussion.upvoted;
    if (this.discussion.upvoted) {
      ++this.discussion.upvotes;
    } else {
      --this.discussion.upvotes;
    }
    this.service.upvoteDiscussion(AuthGuard.getAccessToken(), this.discussion.id).subscribe();
  }

  upvoteComment(id: number) {
    this.discussion.comments[id].upvoted = !this.discussion.comments[id].upvoted;
    if (this.discussion.comments[id].upvoted) {
      ++this.discussion.comments[id].upvotes;
    } else {
      --this.discussion.comments[id].upvotes;
    }
    this.service.upvoteComment(AuthGuard.getAccessToken(), this.discussion.comments[id].id).subscribe();
  }
}
