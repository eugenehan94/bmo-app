import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-business-download-banner',
  templateUrl: './download-banner.component.html',
  styleUrls: ['./download-banner.component.css'],
})
export class BusinessDownloadBannerComponent implements OnInit {
  constructor(private store: Store<any>) {}
  title: string = 'Compare your online banking options for business';
  description: string =
    'Choose between Online Banking and Online Banking for Business. Plus, download our award-winning mobile banking app.';
  linkName: string = 'Explore your options';
  linkHref: string =
    'https://www.bmo.com/main/business/cash-management/banking-online/';
  linkAriaLabel: string =
    'Explore your digital banking for business options, opens in a new tab';
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
