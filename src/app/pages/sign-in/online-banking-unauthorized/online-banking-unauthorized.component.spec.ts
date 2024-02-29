import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBankingUnauthorizedComponent } from './online-banking-unauthorized.component';

describe('OnlineBankingUnauthorizedComponent', () => {
  let component: OnlineBankingUnauthorizedComponent;
  let fixture: ComponentFixture<OnlineBankingUnauthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineBankingUnauthorizedComponent]
    });
    fixture = TestBed.createComponent(OnlineBankingUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
