import { TestBed, inject } from '@angular/core/testing';

import { ChallengeService } from './challenge.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ChallengeService]
    });
  });

  it('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
