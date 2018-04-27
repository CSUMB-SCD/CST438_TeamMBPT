import { Component, OnInit } from '@angular/core';
import {ScoreboardService} from '../../services/scoreboard.service';
import {Profile} from '../../services/profile.service';
import {AuthGuard} from '../../../services/auth-guard.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  providers: [ScoreboardService]
})
export class ScoreboardComponent implements OnInit {
  dataSource: ScoreboardDataSource;
  displayedColumns = ['display_name', 'default_language', 'points'];

  constructor(
    private service: ScoreboardService
  ) {
    this.dataSource = new ScoreboardDataSource(service);
  }

  ngOnInit() { }
}

export class ScoreboardDataSource extends DataSource<any> {

  constructor(private service: ScoreboardService) {
    super();
  }

  connect(): Observable<Profile[]> {
    return this.service.query(AuthGuard.getAccessToken());
  }

  disconnect() { }
}
