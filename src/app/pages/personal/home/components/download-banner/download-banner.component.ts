import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-person-download-banner',
  templateUrl: './download-banner.component.html',
  styleUrls: ['./download-banner.component.css'],
})
export class DownloadBannerComponent implements OnInit {
  constructor(private store: Store<any>) {}
  title: string = 'Get our award-winning mobile banking app';
  description: string =
    'Our app ranked #1 number onein Canada for digital money management. Enjoy 20+ twenty plusfeatures – from spending insights to global transfers.';
  linkName: string = 'Explore Features';
  linkHref: string = 'https://www.bmo.com/main/personal/ways-to-bank/';
  linkAriaLabel: string = 'Explore the features on the b m o banking app';
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res)=> {
      this.currentScreenSize = res.currentScreenSize;
    })
  }

}
