import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {ChallengeDetailComponent, SafeHtmlPipe} from './components/challenge-detail/challenge-detail.component';
import {ChallengeTableComponent} from './components/challenge-table/challenge-table.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChallengeRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    ChallengeTableComponent,
    ChallengeDetailComponent,
    ChallengeComponent,
    ChallengeDetailComponent
  ]
})
export class ChallengeModule { }
