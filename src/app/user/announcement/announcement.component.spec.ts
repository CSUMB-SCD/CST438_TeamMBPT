import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementComponent } from './announcement.component';
import {UserModule} from '../user.module';
import {AnnouncementModule} from './announcement.module';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        AnnouncementModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
