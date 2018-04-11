import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuard} from '../services/auth-guard.service';
import {SettingComponent} from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'announcement', loadChildren: './announcement/announcement.module#AnnouncementModule' },
      { path: 'challenge', loadChildren: './challenge/challenge.module#ChallengeModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionModule' },
      { path: 'scoreboard', loadChildren: './scoreboard/scoreboard.module#ScoreboardModule' },
      { path: 'setting', component: SettingComponent},
      { path: 'logout', component: LogoutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
