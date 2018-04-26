import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatPaginatorModule, MatSelectModule, MatTableModule} from '@angular/material';
import {ChallengeDetailComponent} from './components/challenge-detail/challenge-detail.component';
import {ChallengeTableComponent} from './components/challenge-table/challenge-table.component';
import {HighlightCodeDirective} from './highlight-code.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChallengeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    HighlightCodeDirective,
    ChallengeTableComponent,
    ChallengeDetailComponent,
    ChallengeComponent,
    ChallengeDetailComponent
  ]
})
export class ChallengeModule { }
