import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityNoticeComponent } from './security-notice.component';

describe('SecurityNoticeComponent', () => {
  let component: SecurityNoticeComponent;
  let fixture: ComponentFixture<SecurityNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityNoticeComponent]
    });
    fixture = TestBed.createComponent(SecurityNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
