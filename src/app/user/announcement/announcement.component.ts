import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { MatDialog } from '@angular/material';
import { AnnouncementEditDialogComponent } from './components/announcement-edit-dialog/announcement-edit-dialog.component';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  providers: [ AnnouncementService ]

})
export class AnnouncementComponent implements OnInit {
  announcements: any;

  constructor(private service: AnnouncementService,
              public dialog: MatDialog) {}


  ngOnInit() {
    this.service.get_announcements(AuthGuard.getToken()).subscribe(object => {
      this.announcements = object;
    });
  }

  editPost() {
    const dialogRef = this.dialog.open(AnnouncementEditDialogComponent);
  }
}
