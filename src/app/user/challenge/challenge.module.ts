import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material';
import { ChallengeDetailComponent } from './components/challenge-detail/challenge-detail.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChallengeRoutingModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  declarations: [
    ChallengeDetailComponent,
    ChallengeComponent,
    ChallengeDetailComponent
  ]
})
export class ChallengeModule { }
