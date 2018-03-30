import { TestBed, inject } from '@angular/core/testing';

import { DiscussionService } from './discussion.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DiscussionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [DiscussionService]
    });
  });

  it('should be created', inject([DiscussionService], (service: DiscussionService) => {
    expect(service).toBeTruthy();
  }));
});
