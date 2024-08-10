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
      fromAccountType: any;
      toAccountType: any;
    }
  ) {
    console.log('Dialog content: ', this.dialogData);
  }

  fromAccount? = this.dialogData.fromAccount;
  fromAccountName? = this.dialogData.fromAccountType.AccountType;
  toAccount? = this.dialogData.toAccount;
  toAccountName = this.dialogData.toAccountType.AccountType;
  amount? = this.dialogData.amount;

  fromAccountAmount? =
    this.dialogData.fromAccountType.Amount - this.dialogData.amount;
  toAccountAmount? =
    this.dialogData.toAccountType.Amount - this.dialogData.amount;

  closeDialog() {
    this.dialogRef.close();
  }
  confirmTransfer() {
    console.log(
      'Confirm Selected: ',
      this.fromAccountAmount,
      this.fromAccount,
      this.toAccountAmount,
      this.toAccount
    );
  }
  closeDialogAndClearData() {
    this.dialogRef.close('Clear');
  }
}
