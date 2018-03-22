import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnnouncementEditDialogComponent } from './announcement-edit-dialog/announcement-edit-dialog.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, LogoutComponent, NavbarComponent, AnnouncementEditDialogComponent],
})
export class UserModule { }
