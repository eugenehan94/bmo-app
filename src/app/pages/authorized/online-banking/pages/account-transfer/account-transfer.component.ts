import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
// Components
import { TransferConfirmationDialogComponent } from '../../components/transfer-confirmation-dialog/transfer-confirmation-dialog.component';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

import { StorageService } from 'src/app/_services/storage.service';
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
  transferForm = new FormGroup({
    fromAccount: new FormControl(null),
    toAccount: new FormControl(null),
    amount: new FormControl('', []),
  });

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
    console.log('formGroup: ', this.transferForm);
    console.log('formGroup: from', this.transferForm.value.fromAccount);
    console.log('formGroup: to ', this.transferForm.value.toAccount);
    console.log('formGroup: amount ', this.transferForm.value.amount);

    if (
      this.transferForm.value.fromAccount === this.transferForm.value.toAccount
    ) {
      this.matchingAccountChoice = true;
    }
  }

  onSubmit(e: any) {
    // e.preventDefault();
    if (
      this.matchingAccountChoice === true ||
      this.transferForm.status === 'INVALID'
    ) {
      return;
    }

    const dialogRef = this.dialog.open(TransferConfirmationDialogComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      data: {
        userAccounts: this.userAccounts,
        // fromAccount: this.fromAccount,
        // toAccount: this.toAccount,
        // amount: this.amount,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed: ', result);
      if (result === 'Clear') {
        // this.fromAccount.reset();
      }
    });
  }
}
