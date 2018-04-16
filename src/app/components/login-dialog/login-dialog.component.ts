import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  username: string;
  password: string;
  invalid: boolean;

  constructor(
    private auth: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.invalid = false;
  }

  ngOnInit() {
  }

  signIn(): void {
    this.auth.getToken(this.username, this.password).subscribe(result => {
      if (result) {
        this.dialogRef.close();
      } else {
        this.invalid = true;
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
