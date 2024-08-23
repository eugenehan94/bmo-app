import { Component, inject, model, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferConfirmationDialogComponent } from '../transfer-confirmation-dialog/transfer-confirmation-dialog.component';
@Component({
  selector: 'app-transfer-done-dialog',
  templateUrl: './transfer-done-dialog.component.html',
  styleUrl: './transfer-done-dialog.component.css',
})
//@NOTE: Trying inject() instead of constructor()
export class TransferDoneDialogComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<TransferConfirmationDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);
  amount = this.data.amount;
  fromAccount = this.data.fromAccount;
  fromAccountType = this.data.fromAccountType.AccountType;
  toAccount = this.data.toAccount;
  toAccountType = this.data.toAccountType.AccountType;
  ngOnInit(): void {
    console.log('this.data: ', this.data);
  }
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
