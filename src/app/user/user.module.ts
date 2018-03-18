import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, NavbarComponent],
  exports: [UserComponent]
})
export class UserModule { }
