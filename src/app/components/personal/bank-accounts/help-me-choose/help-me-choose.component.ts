import { Component, OnInit } from '@angular/core';
import { HelpMeChooseService } from './help-me-choose.service';

// ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-personal-bank-accounts-help-me-choose',
  templateUrl: './help-me-choose.component.html',
  styleUrls: ['./help-me-choose.component.css'],
})
export class PersonalBankAccountsHelpMeChooseComponent implements OnInit {
  constructor(
    private service: HelpMeChooseService,
    private store: Store<any>
  ) {}

  firstOptionsList?: any;
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.firstOptionsList = this.service.firstOptionsList;
  }
}
