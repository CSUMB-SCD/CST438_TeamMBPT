import { Component, OnInit } from '@angular/core';
import {Discussion, DiscussionService} from '../services/discussion.service';
import {MatDialog} from '@angular/material';
import {DiscussionDialogComponent} from './components/discussion-dialog/discussion-dialog.component';
import {AuthGuard} from '../../services/auth-guard.service';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css'],
  providers: [DiscussionService]
})
export class DiscussionComponent implements OnInit {
  discussions: Discussion[];

  constructor(private service: DiscussionService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getDiscussion(AuthGuard.getAccessToken()).subscribe(object => {
      this.discussions = object as Discussion[];
      for (const discussion of this.discussions) {
        discussion.image = ProfileService.resizeImage(discussion.image, 24);
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DiscussionDialogComponent);
  }
}
