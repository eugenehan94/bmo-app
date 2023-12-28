import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutOthersComponent } from './check-out-others.component';

describe('CheckOutOthersComponent', () => {
  let component: CheckOutOthersComponent;
  let fixture: ComponentFixture<CheckOutOthersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckOutOthersComponent]
    });
    fixture = TestBed.createComponent(CheckOutOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
