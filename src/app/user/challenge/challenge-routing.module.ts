import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './challenge.component';
import {ChallengeDetailComponent} from './components/challenge-detail/challenge-detail.component';

const routes: Routes = [
  {
    path: '', component: ChallengeComponent
  },
  {
    path: ':challenge_id', component: ChallengeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
