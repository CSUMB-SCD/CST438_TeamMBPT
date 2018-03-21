import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-announcement-edit-dialog',
  templateUrl: './announcement-edit-dialog.component.html',
  styleUrls: ['./announcement-edit-dialog.component.css']
})
export class AnnouncementEditDialogComponent implements OnInit {
  constructor(private post: any,
    public dialogRef: MatDialogRef<AnnouncementEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  submitChange($title, $text) {
    this.post.date = Date().toString();
    this.post.title = $title;
    this.post.text = $text;
    this.dialogRef.close();
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
