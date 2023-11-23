import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiepopupComponent } from './cookiepopup.component';

describe('CookiepopupComponent', () => {
  let component: CookiepopupComponent;
  let fixture: ComponentFixture<CookiepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiepopupComponent]
    });
    fixture = TestBed.createComponent(CookiepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
