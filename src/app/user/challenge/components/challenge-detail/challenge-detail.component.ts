import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Challenge, ChallengeService} from '../../../services/challenge.service';
import {AuthGuard} from '../../../../services/auth-guard.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css'],
  providers: [ChallengeService]
})
export class ChallengeDetailComponent implements OnInit {
  challenge: Challenge;

  constructor(
    private route: ActivatedRoute,
    private service: ChallengeService) { }

  ngOnInit() {
    this.challenge = null;
    this.route.params.forEach(param => {
      this.service.query_id(AuthGuard.getAccessToken(), param.challenge_id).subscribe(object => {
        this.challenge = object;
      });
    });
  }
}
