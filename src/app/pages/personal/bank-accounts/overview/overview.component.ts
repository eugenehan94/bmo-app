import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-personal-bank-accounts-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class PersonalBankAccountsOverviewComponent implements OnInit {
  constructor(
    private overviewService: OverviewService,
    private store: Store<any>
  ) {}

  bankAccountsData?: any;
  currentScreenSize?: any;

  ngOnInit(): void {
    this.bankAccountsData = this.overviewService.bankAccountData;

    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
