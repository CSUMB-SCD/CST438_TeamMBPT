import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChallengeRoutingModule
  ],
  declarations: [
    ChallengeComponent
  ]
})
export class ChallengeModule { }
