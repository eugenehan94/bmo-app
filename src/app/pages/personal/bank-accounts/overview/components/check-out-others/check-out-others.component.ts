import { Component, OnInit } from '@angular/core';
import { CheckOutOthersService } from './check-out-others.service';

// ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-personal-bank-accounts-check-out-others',
  templateUrl: './check-out-others.component.html',
  styleUrls: ['./check-out-others.component.css'],
})
export class PersonalBankAccountsCheckOutOthersComponent implements OnInit {
  constructor(
    private service: CheckOutOthersService,
    private store: Store<any>
  ) {}
  checkOutOtherServices?: any;
  currentScreenSize?: string;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.checkOutOtherServices = this.service.checkOutOtherServices;
  }
}
