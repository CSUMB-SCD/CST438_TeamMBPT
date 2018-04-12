import { Component, OnInit } from '@angular/core';
import {DiscussionService} from '../services/discussion.service';
import {MatDialog} from '@angular/material';
import {DiscussionDialogComponent} from './components/discussion-dialog/discussion-dialog.component';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css'],
  providers: [DiscussionService]
})
export class DiscussionComponent implements OnInit {
  discussionData: any;

  constructor(private service: DiscussionService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getDiscussion(AuthGuard.getToken()).subscribe(object => {
      this.discussionData = object;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DiscussionDialogComponent);
  }
}
