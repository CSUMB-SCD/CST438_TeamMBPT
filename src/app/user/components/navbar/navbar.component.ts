import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Profile, ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public profile: Profile;
  showSearchBar: boolean;
  searchBar: string;

  constructor(
    private sidenav: SidenavService,
    private profileService: ProfileService
  ) { }

  toggleNav() {
    this.sidenav.toggle();
  }

  ngOnInit(): void {
    this.profile = null;
    this.showSearchBar = false;
    this.profileService.query(AuthGuard.getAccessToken()).subscribe(object => {
      this.profile = object as Profile;
      this.profile.image = ProfileService.resizeImage(this.profile.image, 40);
    });
  }

  search() {
  }

  startSearch() {
    this.showSearchBar = true;
  }

  endSearch() {
    this.showSearchBar = false;

  }
}
