import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountTransferComponent } from '../../pages/account-transfer/account-transfer.component';

@Component({
  selector: 'app-transfer-confirmation-dialog',
  templateUrl: './transfer-confirmation-dialog.component.html',
  styleUrls: ['./transfer-confirmation-dialog.component.css'],
})
export class TransferConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AccountTransferComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      userAccounts: any;
      fromAccount: any;
      toAccount: any;
      amount: any;
    }
  ) {
    console.log('Dialog content: ', this.dialogData);
  }

  test? = this.dialogData;
  fromAccount? = this.dialogData.fromAccount;
  fromAccountName = this.dialogData.userAccounts.filter(
    (account: { AccountNumber: any }) => {}
  );

  toAccount? = this.dialogData.toAccount;
  amount? = this.dialogData.amount;
  closeDialog() {
    this.dialogRef.close();
  }
}
