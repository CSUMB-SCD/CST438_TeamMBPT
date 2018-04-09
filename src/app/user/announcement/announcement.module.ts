import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import {AnnouncementService} from '../services/announcement.service';
import {AnnouncementEditDialogComponent} from './components/announcement-edit-dialog/announcement-edit-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    MatTabsModule
  ],
  declarations: [AnnouncementComponent, AnnouncementEditDialogComponent]
})
export class AnnouncementModule { }
