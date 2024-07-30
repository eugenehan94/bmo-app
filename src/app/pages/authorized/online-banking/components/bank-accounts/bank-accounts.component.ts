import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css'],
})
export class BankAccountsComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private storageService: StorageService
  ) {}
  currentScreenSize?: string;
  userAccounts?: any;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
      this.userAccounts = this.storageService.getUser().userAccounts;
    });
  }
}
