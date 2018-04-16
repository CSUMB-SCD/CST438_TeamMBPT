import {Component, OnInit, Pipe, PipeTransform, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Challenge, ChallengeService} from '../../../services/challenge.service';
import {AuthGuard} from '../../../../services/auth-guard.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css'],
  providers: [ChallengeService],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeDetailComponent implements OnInit {
  challenge: Challenge;

  HTML = '<h3 class="inputTest">Input</h3>' +
    'There IS no input for this problem.' +
    '<br>' +
    '<h3>Output</h3>' +
    'Output should contain one line, containing the string “Hello World!”.';

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

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
