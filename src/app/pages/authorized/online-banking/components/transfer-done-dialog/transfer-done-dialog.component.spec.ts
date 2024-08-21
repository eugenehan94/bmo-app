import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDoneDialogComponent } from './transfer-done-dialog.component';

describe('TransferDoneDialogComponent', () => {
  let component: TransferDoneDialogComponent;
  let fixture: ComponentFixture<TransferDoneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferDoneDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferDoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
