import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeRoutingModule } from './challenge-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ],
  declarations: [
    ChallengeComponent
  ]
})
export class ChallengeModule { }
