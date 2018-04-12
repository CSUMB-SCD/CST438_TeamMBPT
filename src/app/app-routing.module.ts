import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'welcome',
    loadChildren: './guest/guest.module#GuestModule'
  },
  {
    path: 'auth/callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
