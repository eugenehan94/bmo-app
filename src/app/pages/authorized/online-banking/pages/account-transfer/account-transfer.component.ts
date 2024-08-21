import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
// Components
import { TransferConfirmationDialogComponent } from '../../components/transfer-confirmation-dialog/transfer-confirmation-dialog.component';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

import { StorageService } from 'src/app/core/_services/storage.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css'],
})
export class AccountTransferComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>,
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  currentScreenSize?: string;
  userAccounts?: any;
  matchingAccountChoice: boolean = false;
  insufficientFunds: boolean = false;
  transferForm = new FormGroup({
    fromAccount: new FormControl(null),
    toAccount: new FormControl(null),
    amount: new FormControl('', []),
  });
  fromAccountType?: string;
  toAccountType?: string;
  fromAccountAmountInInt?: number;
  // Used to clear error styles from the Angular Material inputs
  @ViewChild('formDirective') formDirective!: NgForm;
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

    this.userAccounts = this.storageService.getUser().userAccounts;
    console.log('userAccounts: ', this.userAccounts);
  }

  accountMatching() {
    this.matchingAccountChoice = false;
    if (
      this.transferForm.value.fromAccount === this.transferForm.value.toAccount
    ) {
      this.matchingAccountChoice = true;
    }
  }

  onSubmit(e: any) {
    if (
      this.matchingAccountChoice === true ||
      this.transferForm.status === 'INVALID'
    ) {
      return;
    }

    console.log('transferForm: ', this.transferForm);
    this.fromAccountType = this.userAccounts.find((account: any) => {
      return account.AccountNumber === this.transferForm.value.fromAccount;
    });
    this.toAccountType = this.userAccounts.find((account: any) => {
      return account.AccountNumber === this.transferForm.value.toAccount;
    });
    this.fromAccountAmountInInt = this.userAccounts.find((account: any) => {
      return account.AccountNumber === this.transferForm.value.fromAccount;
    }).Amount;
    // Makes sure the entered amount is not greater then amount in selected from account
    if (
      parseFloat(this.transferForm.value.amount!) > this.fromAccountAmountInInt!
    ) {
      console.log('Entered amount not sufficient');
      this.insufficientFunds = true;
      return;
    }
    this.insufficientFunds = false;
    const dialogRef = this.dialog.open(TransferConfirmationDialogComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      data: {
        userAccounts: this.userAccounts,
        fromAccount: this.transferForm.value.fromAccount,
        toAccount: this.transferForm.value.toAccount,
        amount: this.transferForm.value.amount,
        toAccountType: this.toAccountType,
        fromAccountType: this.fromAccountType,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      window.scrollTo(0, 0);
      console.log('Dialog closed: ', result);
      if (result === 'Clear') {
        this.transferForm.reset();
        this.formDirective.resetForm();
      }
      if (result) {
        if (result.newUserAccountData) {
          this.userAccounts = result.newUserAccountData;
        }
      }
    });
  }
}
