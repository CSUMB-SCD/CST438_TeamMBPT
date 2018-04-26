import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Challenge, ChallengeService} from '../../../services/challenge.service';
import {AuthGuard} from '../../../../services/auth-guard.service';
import {FileUploadService} from '../../../services/file-upload.service';
import {TodoService} from '../../../services/todo.service';
import {Language, ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css'],
  providers: [ChallengeService, FileUploadService, TodoService, ProfileService],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeDetailComponent implements OnInit {
  challenge: Challenge;
  file: File = null;
  selectedLanguage: number;
  public code: string;
  public languages: Language[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengeService: ChallengeService,
    private todoService: TodoService,
    private profileService: ProfileService,
    private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.challenge = null;
    this.code = null;
    this.selectedLanguage = 0;
    if (ProfileService.sharedProfile) {
      this.selectedLanguage = ProfileService.sharedProfile.default_language.id;
    }
    this.route.params.forEach(param => {
      this.challengeService.query_id(AuthGuard.getAccessToken(), param.challenge_id).subscribe(object => {
        this.challenge = object;
        this.challenge.challenge_id = param.challenge_id;
      });
    });
    this.profileService.getLanguages(AuthGuard.getAccessToken()).subscribe(object => {
      this.languages = object as Language[];
    });
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
    const reader = new FileReader();
    reader.onload = () => {
      this.code = reader.result;
    };
    reader.readAsText(this.file);
  }

  submit() {
    this.fileUploadService.submissionUpload(AuthGuard.getAccessToken(),
      this.code, this.selectedLanguage, this.challenge.challenge_id).subscribe(object => {
        this.router.navigate(['/submission/' + object['id']]);
      });
  }

  favorite() {
    this.challenge.todo = !this.challenge.todo;
    this.todoService.add(AuthGuard.getAccessToken(), this.challenge.challenge_id).subscribe();
  }
}
