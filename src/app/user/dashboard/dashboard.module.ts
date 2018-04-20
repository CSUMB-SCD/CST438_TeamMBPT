import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
