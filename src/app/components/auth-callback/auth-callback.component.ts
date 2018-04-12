import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private auth: AuthGuard) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.auth.login(params['access_token']);
    });
  }
}
