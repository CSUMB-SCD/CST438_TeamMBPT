import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import {AuthGuard} from '../../services/auth-guard.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
  providers: [ChallengeService]
})
export class ChallengeComponent implements OnInit {
  challenges: Challenge[];

  constructor(
    private service: ChallengeService) { }

  ngOnInit() {
    this.service.get_Challenges(AuthGuard.getToken()).subscribe(object => {
      this.challenges = object as Challenge[];
    });
  }
}

interface Challenge {
  title: string;
  challenge_id: string;
  description: string;
  submission_count: number;
  accepted_count: number;
  created: string;
  publisher: string;
}
