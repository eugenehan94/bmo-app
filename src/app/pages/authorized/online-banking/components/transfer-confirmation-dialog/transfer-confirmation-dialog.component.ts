import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountTransferComponent } from '../../pages/account-transfer/account-transfer.component';
import { BreakpointObserver } from '@angular/cdk/layout';

//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

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
    private store: Store<any>
  ) {
    console.log('Dialog content: ', this.dialogData);
  }
  currentScreenSize?: string;
  fromAccount? = this.dialogData.fromAccount;
  fromAccountName? = this.dialogData.fromAccountType.AccountType;
  toAccount? = this.dialogData.toAccount;
  toAccountName = this.dialogData.toAccountType.AccountType;
  amount? = this.dialogData.amount;

  fromAccountAmount? =
    this.dialogData.fromAccountType.Amount - this.dialogData.amount;
  toAccountAmount? =
    this.dialogData.toAccountType.Amount - this.dialogData.amount;

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
  }
  closeDialogAndClearData() {
    this.dialogRef.close('Clear');
  }
}
