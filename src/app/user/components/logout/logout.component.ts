import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../../services/auth-guard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authGuard: AuthGuard) {
  }

  ngOnInit() {
  }

}
