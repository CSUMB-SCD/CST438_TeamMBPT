import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionComponent } from './discussion.component';
import {DiscsussionNewpostComponent} from './components/discsussion-newpost/discsussion-newpost.component';

const routes: Routes = [
  {
    path: '', component: DiscussionComponent
  },
  {
    path: 'newpost', component: DiscsussionNewpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
