import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion.component';
import { DiscussionRoutingModule } from './discussion-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule,
    DiscussionRoutingModule
  ],
  declarations: [DiscussionComponent]
})
export class DiscussionModule { }
