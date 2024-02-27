import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css'],
})
export class BankAccountsComponent implements OnInit {
  constructor(private store: Store<any>) {}
  currentScreenSize?: string;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
