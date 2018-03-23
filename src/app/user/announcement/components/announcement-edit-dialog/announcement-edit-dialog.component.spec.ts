import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementEditDialogComponent } from './announcement-edit-dialog.component';
import {UserModule} from '../../../user.module';
import {AnnouncementModule} from '../../announcement.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

describe('AnnouncementEditDialogComponent', () => {
  let component: AnnouncementEditDialogComponent;
  let fixture: ComponentFixture<AnnouncementEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserModule,
        AnnouncementModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
