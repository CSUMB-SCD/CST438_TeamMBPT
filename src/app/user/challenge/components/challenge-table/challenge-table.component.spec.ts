import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTableComponent } from './challenge-table.component';

describe('ChallengeTableComponent', () => {
  let component: ChallengeTableComponent;
  let fixture: ComponentFixture<ChallengeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
