import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [BlogService]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
