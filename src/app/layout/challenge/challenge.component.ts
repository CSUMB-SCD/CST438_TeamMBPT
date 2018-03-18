import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
  providers: [ChallengeService]
})
export class ChallengeComponent implements OnInit {
  challengeData : any;
  
  constructor(private service:ChallengeService) { }

  ngOnInit() {
    this.challengeData = this.service.get_Challenges();
  }
}
