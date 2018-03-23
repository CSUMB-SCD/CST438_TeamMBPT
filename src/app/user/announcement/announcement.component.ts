import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material';
import { AnnouncementEditDialogComponent } from './components/announcement-edit-dialog/announcement-edit-dialog.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  providers: [BlogService]

})
export class AnnouncementComponent implements OnInit {
  user = {'isAdmin': true};
  blogposts: any;
  //user: any;

  constructor(private blogServ: BlogService,
              public dialog: MatDialog) {}


  ngOnInit() {
    // sample case; ignore -J
    this.blogposts = [{'user_id': 'Test User',
      'date': Date().toString(),
      'title': 'This is a title',
      'text': 'This is some text'
    }, {'user_id': 'Test User2',
      'date': Date().toString(),
      'title': 'This is a title',
      'text': 'this is some text'
    }];
    /*this.blogServ.get_blogposts().subscribe(object => {
      this.blogposts = object;
    });*/
  }

  editPost() {
    const dialogRef = this.dialog.open(AnnouncementEditDialogComponent);
  }
}
