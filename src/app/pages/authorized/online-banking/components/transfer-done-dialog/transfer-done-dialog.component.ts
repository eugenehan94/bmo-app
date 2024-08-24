import { Component, inject, model, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferConfirmationDialogComponent } from '../transfer-confirmation-dialog/transfer-confirmation-dialog.component';

import { BreakpointObserver } from '@angular/cdk/layout';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-transfer-done-dialog',
  templateUrl: './transfer-done-dialog.component.html',
  styleUrl: './transfer-done-dialog.component.css',
})
//@NOTE: Trying inject() instead of constructor()
export class TransferDoneDialogComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<TransferConfirmationDialogComponent>);
  private data = inject(MAT_DIALOG_DATA);
  private breakpointObserver = inject(BreakpointObserver);
  private store = inject(Store);
  amount = this.data.amount;
  fromAccount = this.data.fromAccount;
  fromAccountType = this.data.fromAccountType.AccountType;
  toAccount = this.data.toAccount;
  toAccountType = this.data.toAccountType.AccountType;
  ngOnInit(): void {
    console.log('this.data: ', this.data);
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
