import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAndMortgagesComponent } from './loans-and-mortgages.component';

describe('LoansAndMortgagesComponent', () => {
  let component: LoansAndMortgagesComponent;
  let fixture: ComponentFixture<LoansAndMortgagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoansAndMortgagesComponent]
    });
    fixture = TestBed.createComponent(LoansAndMortgagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
