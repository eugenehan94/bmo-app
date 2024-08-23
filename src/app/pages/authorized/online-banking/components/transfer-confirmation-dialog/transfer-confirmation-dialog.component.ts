import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountTransferComponent } from '../../pages/account-transfer/account-transfer.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/core/_services/storage.service';

import { TransferDoneDialogComponent } from '../transfer-done-dialog/transfer-done-dialog.component';

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
    },
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>,
    private http: HttpClient,
    private storageService: StorageService,
    private secondDialog: MatDialog
  ) {
    console.log('Dialog content: ', this.dialogData);
  }
  currentScreenSize?: string;
  fromAccount? = this.dialogData.fromAccount;
  fromAccountName? = this.dialogData.fromAccountType.AccountType;
  toAccount? = this.dialogData.toAccount;
  toAccountName = this.dialogData.toAccountType.AccountType;
  amount? = this.dialogData.amount;

  customerId? = this.dialogData.fromAccountType.CustomerID;

  fromAccountAmount? =
    this.dialogData.fromAccountType.Amount - this.dialogData.amount;
  toAccountAmount? =
    this.dialogData.toAccountType.Amount + parseFloat(this.dialogData.amount);

  userAccounts?: any;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 599.99px)',
        '(min-width: 600px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (this.breakpointObserver.isMatched('(max-width: 599.99px)')) {
          this.store.dispatch(setScreenSize({ screenSize: 'Small' }));
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 600px) and (max-width:1024px)'
          )
        ) {
          this.store.dispatch(setScreenSize({ screenSize: 'Medium' }));
        } else {
          this.store.dispatch(setScreenSize({ screenSize: 'Large' }));
        }
      });

    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

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
    let roundedFromAccountAmount =
      Math.round(this.fromAccountAmount! * 100) / 100;
    let roundedToAccountAmount = Math.round(this.toAccountAmount! * 100) / 100;
    console.log('customer ID: ', this.customerId);
    return this.http
      .post(
        'http://localhost:5000/api/v1/sign-in/transferFunds',
        {
          fromAccountAmount: roundedFromAccountAmount,
          fromAccount: this.fromAccount,
          toAccountAmount: roundedToAccountAmount,
          toAccount: this.toAccount,
          customerId: this.customerId,
        },
        {
          headers: { 'content-type': 'application/json' },
          withCredentials: true,
        }
      )
      .subscribe((result) => {
        console.log('return result: ', result);
        this.storageService.update(result, 'auth-user');
        this.userAccounts = this.storageService.getUser().userAccounts;
        console.log('userAccounts in transfer funds: ', this.userAccounts);
        const dialogRefTwo = this.secondDialog.open(
          TransferDoneDialogComponent,
          {
            height: '100%',
            width: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            data: {
              amount: this.dialogData.amount,
              fromAccount: this.dialogData.fromAccount,
              fromAccountType: this.dialogData.fromAccountType,
              toAccount: this.dialogData.toAccount,
              toAccountType: this.dialogData.toAccountType,
            },
          }
        );

        dialogRefTwo.afterClosed().subscribe((result) => {
          console.log('second dialog closed');
          this.dialogRef.close({ newUserAccountData: this.userAccounts });
        });
      });
  }
  closeDialogAndClearData() {
    this.dialogRef.close('Clear');
  }
}
