import { Component, OnInit } from '@angular/core';
import { BankAccountDataType } from 'src/app/components/_shared/interfaces';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-personal-bank-accounts-overview-page',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class PersonalBankAccountsOverviewPage implements OnInit {
  constructor(private overviewService: OverviewService) {}

  bankAccountsData?: BankAccountDataType[];

  ngOnInit(): void {
    this.bankAccountsData = this.overviewService.bankAccountData;
  }
}
