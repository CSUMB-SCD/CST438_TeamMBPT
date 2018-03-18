import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ],
  declarations: [AnnouncementComponent]
})
export class AnnouncementModule { }
