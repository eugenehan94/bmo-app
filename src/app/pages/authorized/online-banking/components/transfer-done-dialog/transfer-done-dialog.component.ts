import { Component, inject, model } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferConfirmationDialogComponent } from '../transfer-confirmation-dialog/transfer-confirmation-dialog.component';
@Component({
  selector: 'app-transfer-done-dialog',
  templateUrl: './transfer-done-dialog.component.html',
  styleUrl: './transfer-done-dialog.component.css',
})
//@NOTE: Trying inject() instead of constructor()
export class TransferDoneDialogComponent {
  private dialogRef = inject(MatDialogRef<TransferConfirmationDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);
  amount = this.data.amount;
  // @Inject(MAT_DIALOG_DATA)
  // public dialogData: {
  //     fromAccount: any;
  //     toAccount: any;
  //     amount: any;
  //     fromAccountType: any;
  //     toAccountType: any;
  //   },
  closeDialog(): void {
    this.dialogRef.close();
  }
}
