import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'announcement', loadChildren: './announcement/announcement.module#AnnouncementModule' },
      { path: 'challenge', loadChildren: './challenge/challenge.module#ChallengeModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionModule' },
      { path: 'scoreboard', loadChildren: './scoreboard/scoreboard.module#ScoreboardModule' },
      { path: 'logout', component: LogoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
