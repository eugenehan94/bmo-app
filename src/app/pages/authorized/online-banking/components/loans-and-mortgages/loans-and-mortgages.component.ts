import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-loans-and-mortgages',
  templateUrl: './loans-and-mortgages.component.html',
  styleUrls: ['./loans-and-mortgages.component.css'],
})
export class LoansAndMortgagesComponent implements OnInit {
  constructor(private store: Store<any>) {}
  currentScreenSize?: string;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
