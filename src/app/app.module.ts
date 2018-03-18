import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    loadChildren: './guest/guest.module#GuestModule'
  },
  {
    path: 'home',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
