import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionComponent } from './discussion.component';
import {DiscussionNewpostComponent} from './components/discussion-newpost/discussion-newpost.component';
import {DiscussionDetailComponent} from './components/discussion-detail/discussion-detail.component';

const routes: Routes = [
  {
    path: '', component: DiscussionComponent
  },
  {
    path: 'newpost', component: DiscussionNewpostComponent
  },
  {
    path: ':id', component: DiscussionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
