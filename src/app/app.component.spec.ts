import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {AppModule} from './app.module';

describe('AppModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
