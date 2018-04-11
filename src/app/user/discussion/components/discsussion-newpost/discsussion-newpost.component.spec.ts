import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscsussionNewpostComponent } from './discsussion-newpost.component';

describe('DiscsussionNewpostComponent', () => {
  let component: DiscsussionNewpostComponent;
  let fixture: ComponentFixture<DiscsussionNewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscsussionNewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscsussionNewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
