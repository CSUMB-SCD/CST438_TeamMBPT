import {Component} from '@angular/core';
import {SidenavService} from '../../services/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(
    private sidenav: SidenavService
  ) { }

  toggleNav() {
    this.sidenav.toggle();
  }
}
