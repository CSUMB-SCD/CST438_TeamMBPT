import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuard} from '../services/auth-guard.service';
import {ProfileComponent} from './components/profile/profile.component';
import {SubmissionListComponent} from './components/submission-list/submission-list.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {SubmissionComponent} from './components/submission/submission.component';
import {DiscussionDetailComponent} from './discussion/components/discussion-detail/discussion-detail.component';

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
      { path: 'submission', component: SubmissionListComponent },
      { path: 'submission/:id', component: SubmissionComponent },
      { path: 'todo', component: TodoListComponent },
      { path: 'post', component: PostListComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'redirectLogout', component: LogoutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
