import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css'],
})
export class InvestmentsComponent implements OnInit {
  constructor(private store: Store<any>) {}
  currentScreenSize?: string;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
