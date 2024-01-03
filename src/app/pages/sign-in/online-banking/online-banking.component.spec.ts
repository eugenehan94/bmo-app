import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBankingComponent } from './online-banking.component';

describe('OnlineBankingComponent', () => {
  let component: OnlineBankingComponent;
  let fixture: ComponentFixture<OnlineBankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineBankingComponent]
    });
    fixture = TestBed.createComponent(OnlineBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
