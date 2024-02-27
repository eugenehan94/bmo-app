import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css'],
})
export class MobileFooterComponent implements OnInit {
  constructor(private store: Store<any>) {}

  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
