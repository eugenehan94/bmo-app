import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorContentComponent } from './error-content.component';

describe('ErrorContentComponent', () => {
  let component: ErrorContentComponent;
  let fixture: ComponentFixture<ErrorContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorContentComponent]
    });
    fixture = TestBed.createComponent(ErrorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
