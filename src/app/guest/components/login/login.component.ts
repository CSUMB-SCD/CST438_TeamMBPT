import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from '../../../services/login.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthGuard } from '../../../services/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  result: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authGuard: AuthGuard,
    private login: LoginService) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
      this.authGuard.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    });
  }
}
