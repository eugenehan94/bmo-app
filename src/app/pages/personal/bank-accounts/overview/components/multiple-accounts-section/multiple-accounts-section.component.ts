import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-personal-bank-accounts-multiple-accounts-section',
  templateUrl: './multiple-accounts-section.component.html',
  styleUrls: ['./multiple-accounts-section.component.css'],
})
export class PersonalBankAccountsMultipleAccountsSectionComponent
  implements OnInit
{
  constructor(private store: Store<any>) {}

  currentScreenSize?: any;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
