import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css'],
})
export class CreditCardsComponent implements OnInit {
  constructor(private store: Store<any>) {}
  currentScreenSize?: string;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
