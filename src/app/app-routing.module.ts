import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component';
import {RegisterComponent} from './components/register/register.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'auth/callback',
    component: AuthCallbackComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
