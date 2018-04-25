import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {Discussion, DiscussionService} from '../../../services/discussion.service';
import {ActivatedRoute} from '@angular/router';

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
    private service: DiscussionService) { }

  ngOnInit() {
    this.discussion = null;
    this.route.params.forEach(param => {
      this.service.query_id(AuthGuard.getAccessToken(), param.id).subscribe(object => {
        this.discussion = object;
      });
    });
  }

  submit() {
    console.log(this.editorContent);
  }
}
