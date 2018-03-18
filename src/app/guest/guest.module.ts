import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { GuestComponent } from './guest.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  imports: [
    CommonModule, GuestRoutingModule
  ],
  declarations: [LoginComponent, GuestComponent]
})
export class GuestModule { }
