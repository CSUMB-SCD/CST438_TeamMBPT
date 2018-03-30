import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/auth-guard.service';
import {AppRoutingModule} from './app-routing.module';
import {DiscussionDialogComponent} from './user/discussion/discussion-dialog/discussion-dialog.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    DiscussionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EditorModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  entryComponents: [DiscussionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
