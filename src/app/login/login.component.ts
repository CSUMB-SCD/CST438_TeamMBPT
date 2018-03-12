import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) {
    login.user().subscribe(object => {
      console.log(object);
    });
    login.redirect();
  }

  ngOnInit() {
  }

}
