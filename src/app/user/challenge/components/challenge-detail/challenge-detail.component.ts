import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  submissionUpload() {
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUploadService.submissionUpload(AuthGuard.getAccessToken(),
        reader.result, this.challenge.challenge_id).subscribe(object => {
        console.log('File uploaded!');
        console.log(object);
      });
    };
    reader.readAsText(this.file);
  }
}
