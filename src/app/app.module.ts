import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/auth-guard.service';
import { UserModule } from './user/user.module';
import { GuestModule } from './guest/guest.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GuestModule,
    UserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
