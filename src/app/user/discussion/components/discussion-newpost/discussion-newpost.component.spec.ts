import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionNewpostComponent } from './discussion-newpost.component';

describe('DiscussionNewpostComponent', () => {
  let component: DiscussionNewpostComponent;
  let fixture: ComponentFixture<DiscussionNewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionNewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionNewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
