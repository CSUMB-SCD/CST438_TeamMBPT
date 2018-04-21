import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';
import {SidenavService} from './services/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private router: Router,
    private service: SidenavService
  ) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.service.setSidenav(this.sidenav);
  }
}
