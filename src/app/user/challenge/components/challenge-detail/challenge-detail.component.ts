import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Challenge, ChallengeService} from '../../../services/challenge.service';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {FileUploadService} from '../../../services/file-upload.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css'],
  providers: [ChallengeService, FileUploadService],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeDetailComponent implements OnInit {
  challenge: Challenge;
  file: File = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService,
    private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.challenge = null;
    this.route.params.forEach(param => {
      this.challengeService.query_id(AuthGuard.getAccessToken(), param.challenge_id).subscribe(object => {
        this.challenge = object;
        this.challenge.challenge_id = param.challenge_id;
      });
    });
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  submit() {
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUploadService.submissionUpload(AuthGuard.getAccessToken(),
        reader.result, 1, this.challenge.challenge_id).subscribe(object => {
          this.router.navigate(['/submission/' + object['id']]);
      });
    };
    reader.readAsText(this.file);
  }

  favorite() {
    console.log('Added to favorites');
  }
}
