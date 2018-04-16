import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {Challenge, ChallengeService} from '../../../services/challenge.service';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-challenge-table',
  templateUrl: './challenge-table.component.html',
  styleUrls: ['./challenge-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [ChallengeService]
})
export class ChallengeTableComponent implements OnInit {
  displayedColumns = ['title', 'submission_count', 'accepted_count', 'created', 'publisher'];
  dataSource: ChallengeTableDataSource;
  expandedElement: any;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  constructor(
    private service: ChallengeService
  ) {
    this.dataSource = new ChallengeTableDataSource(this.service);
  }

  ngOnInit() { }
}

export class ChallengeTableDataSource extends DataSource<any> {

  constructor(private service: ChallengeService) {
    super();
  }

  connect(): Observable<Challenge[]> {
    return this.service.query(AuthGuard.getAccessToken()).map(challenges => {
      const rows = [];
      challenges.forEach(challenge => rows.push(challenge, { detailRow: true, challenge }));
      return rows;
    });
  }

  disconnect() { }
}
