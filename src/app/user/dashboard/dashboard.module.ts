import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  MatCardModule, MatGridListModule, MatIconModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
