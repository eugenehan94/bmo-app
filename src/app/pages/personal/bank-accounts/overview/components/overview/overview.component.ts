import { Component, Input } from '@angular/core';
import { BankAccountDataType } from 'src/app/interfaces';
//ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-personal-bank-accounts-overview-component',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class PersonalBankAccountsOverviewComponent {
  constructor(private store: Store<any>) {}

  @Input() bankAccountsData?: BankAccountDataType[];
  currentScreenSize?: any;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
