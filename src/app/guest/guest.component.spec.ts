import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestComponent } from './guest.component';
import {GuestModule} from './guest.module';

describe('GuestComponent', () => {
  let component: GuestComponent;
  let fixture: ComponentFixture<GuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GuestModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
