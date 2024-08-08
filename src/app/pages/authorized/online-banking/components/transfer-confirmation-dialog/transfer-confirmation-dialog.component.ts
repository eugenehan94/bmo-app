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
  fromAccountName = this.dialogData.userAccounts.find(
    (account: { AccountNumber: any }) => {
      return account.AccountNumber === this.fromAccount.value;
    }
  );

  toAccount? = this.dialogData.toAccount;
  toAccountName = this.dialogData.userAccounts.find(
    (account: { AccountNumber: any }) => {
      return account.AccountNumber === this.toAccount.value;
    }
  );
  amount? = this.dialogData.amount;
  closeDialog() {
    this.dialogRef.close();
  }
  closeDialogAndClearData() {
    this.dialogRef.close('Clear');
  }
}
