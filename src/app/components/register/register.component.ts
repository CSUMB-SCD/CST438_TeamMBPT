import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    AuthenticationService
  ]
})
export class RegisterComponent implements OnInit {
  username = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
    ]);
  confirmPassword = new FormControl('',
    [
      Validators.required
  ]);
  hidePassword = true;
  emailReadonly = false;

  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.hasOwnProperty('params')) {
        params = params['params'];
      }
      if (params.hasOwnProperty('email')) {
        this.emailReadonly = true;
        this.email.setValue(params['email']);
      }
      if (params.hasOwnProperty('username')) {
        this.username.setValue(params['username']);
      }
      if (params.hasOwnProperty('first_name')) {
        this.firstName.setValue(params['first_name']);
      }
      if (params.hasOwnProperty('last_name')) {
        this.lastName.setValue(params['last_name']);
      }
    });
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minlength') ? 'The minimum length of the password is 8 characters.' :
        '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    const data = {
      username: this.username.value,
      password: this.password.value,
      first_name: this.firstName.value,
      last_name: this.lastName.value,
      email: this.email.value,
    };
    this.auth.register(data);
  }
}
