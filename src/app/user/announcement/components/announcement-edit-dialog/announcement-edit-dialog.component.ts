import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-announcement-edit-dialog',
  templateUrl: './announcement-edit-dialog.component.html',
  styleUrls: ['./announcement-edit-dialog.component.css']
})

export class AnnouncementEditDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AnnouncementEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  submitChange($title, $text) {
    this.data.date = Date().toString();
    this.data.title = $title;
    this.data.text = $text;
    this.dialogRef.close();
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
