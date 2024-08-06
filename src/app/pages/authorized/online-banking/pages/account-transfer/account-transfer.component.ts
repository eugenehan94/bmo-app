import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, Validators } from '@angular/forms';
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
  fromAccount = new FormControl(null);
  toAccount = new FormControl(null);
  matchingAccountChoice: boolean = false;
  amount = new FormControl('', []);
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
    if (this.fromAccount.value === this.toAccount.value) {
      this.matchingAccountChoice = true;
    }
    console.log('Matching: ', this.matchingAccountChoice);
  }

  onSubmit(e: any) {
    // e.preventDefault();
    if (
      this.matchingAccountChoice === true ||
      this.amount.errors ||
      this.fromAccount.errors ||
      this.toAccount.errors
    ) {
      return;
    }
    // const dialogRef = this.dialog.open( , {
    //   height: '100%',
    //   width: '100%'
    // });
    console.log('fromAccount: ', this.fromAccount);
    console.log('toAccount: ', this.toAccount);
    console.log('Amount: ', this.amount);
  }
}
