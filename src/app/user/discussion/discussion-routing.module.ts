import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionComponent } from './discussion.component';
import {DiscussionNewpostComponent} from './components/discussion-newpost/discussion-newpost.component';

const routes: Routes = [
  {
    path: '', component: DiscussionComponent
  },
  {
    path: 'newpost', component: DiscussionNewpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
