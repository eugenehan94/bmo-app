import { Component, OnInit, ViewChild } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-personal-bank-accounts-featured-products-component',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class PersonalBankAccountsFeaturedProductsComponent implements OnInit {
  constructor(private store: Store<any>) {}
  showOverlay?: boolean;
  currentScreenSize?: any;
  @ViewChild('cardOneOverlay') cardOneOverlay: any;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

  setOverlay(value: boolean) {
    this.showOverlay = value;
  }
  clickedOverlay(event: any): void {
    // closes dialog when click on overlay (outside modal) when its open
    if (event.target === this.cardOneOverlay.nativeElement) {
      this.showOverlay = false;
    }
  }
}
