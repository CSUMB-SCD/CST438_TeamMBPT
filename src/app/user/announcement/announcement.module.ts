import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import {BlogService} from '../services/blog.service';
import {AnnouncementEditDialogComponent} from './components/announcement-edit-dialog/announcement-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ],
  providers: [BlogService],
  declarations: [AnnouncementComponent, AnnouncementEditDialogComponent]
})
export class AnnouncementModule { }
