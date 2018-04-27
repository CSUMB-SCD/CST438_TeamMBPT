import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import {HttpClientModule} from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import {SidenavService} from './services/sidenav.service';
import {ProfileService} from './services/profile.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SubmissionComponent } from './components/submission/submission.component';
import {ScoreboardComponent} from './components/scoreboard/scoreboard.component';

@NgModule({
  imports: [
    CommonModule,
    MatNativeDateModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    LogoutComponent,
    NavbarComponent,
    ProfileComponent,
    SubmissionListComponent,
    TodoListComponent,
    PostListComponent,
    StatisticsComponent,
    SubmissionComponent,
    ScoreboardComponent
  ],
  providers: [
    SidenavService,
    ProfileService
  ]
})
export class UserModule { }
