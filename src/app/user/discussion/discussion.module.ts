import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion.component';
import { DiscussionRoutingModule } from './discussion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DiscussionRoutingModule
  ],
  declarations: [DiscussionComponent]
})
export class DiscussionModule { }
