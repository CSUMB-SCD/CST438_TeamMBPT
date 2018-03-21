import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementEditDialogComponent } from './announcement-edit-dialog.component';

describe('AnnouncementEditDialogComponent', () => {
  let component: AnnouncementEditDialogComponent;
  let fixture: ComponentFixture<AnnouncementEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementEditDialogComponent ]
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
