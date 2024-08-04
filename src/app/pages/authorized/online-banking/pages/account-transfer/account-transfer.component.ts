import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';

import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css'],
})
export class AccountTransferComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>,
    private storageService: StorageService
  ) {}

  currentScreenSize?: string;
  userAccounts?: any;
  fromAccount?: any;
  toAccount?: any;
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
}
