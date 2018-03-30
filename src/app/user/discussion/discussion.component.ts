import { Component, OnInit } from '@angular/core';
import {DiscussionService} from '../services/discussion.service';
import {MatDialog} from '@angular/material';
import {DiscussionDialogComponent} from './discussion-dialog/discussion-dialog.component';

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
    this.discussionData =
      [
        {
          'user_name': 'dfajilan',
          'title': 'Does this thing work',
          'body': 'Here is a bunch of words I am typing out to test if the subtext will work correctly, hopefully it does!'
        },
        {
          'user_name': 'root',
          'title': 'This thing does work!',
          'body': 'Here is a bunch of words I am typing out to test if the subtext will work correctly, hopefully it does!'
        }
      ];
    // this.service.get_Discussion().subscribe(object => {
    //   this.discussionData = object;
    // });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DiscussionDialogComponent);
  }
}
