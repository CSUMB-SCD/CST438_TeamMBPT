import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'welcome',
    loadChildren: './guest/guest.module#GuestModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
