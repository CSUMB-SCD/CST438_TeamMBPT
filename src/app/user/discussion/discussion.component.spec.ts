import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionComponent } from './discussion.component';
import {UserModule} from '../user.module';
import {DiscussionModule} from './discussion.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DiscussionComponent', () => {
  let component: DiscussionComponent;
  let fixture: ComponentFixture<DiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        DiscussionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
