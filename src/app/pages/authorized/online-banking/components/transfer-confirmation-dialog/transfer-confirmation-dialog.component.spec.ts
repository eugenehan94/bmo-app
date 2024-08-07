import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferConfirmationDialogComponent } from './transfer-confirmation-dialog.component';

describe('TransferConfirmationDialogComponent', () => {
  let component: TransferConfirmationDialogComponent;
  let fixture: ComponentFixture<TransferConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(TransferConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
