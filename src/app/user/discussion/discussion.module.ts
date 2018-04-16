import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion.component';
import { DiscussionRoutingModule } from './discussion-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatExpansionModule} from '@angular/material/expansion';
import { DiscussionNewpostComponent } from './components/discussion-newpost/discussion-newpost.component';
import {DiscussionDetailComponent} from './components/discussion-detail/discussion-detail.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {MatCardModule, MatDividerModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {DiscussionDialogComponent} from './components/discussion-dialog/discussion-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule,
    DiscussionRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    DiscussionComponent,
    DiscussionDialogComponent,
    DiscussionNewpostComponent,
    DiscussionDetailComponent
  ],
  entryComponents: [
    DiscussionComponent,
    DiscussionDialogComponent
  ]
})
export class DiscussionModule { }
