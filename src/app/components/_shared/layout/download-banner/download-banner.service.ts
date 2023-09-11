import { Injectable } from '@angular/core';
import { DownloadAppDataType } from 'src/app/components/_shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DownloadBannerService {
  constructor() {}

  downloadAppData: DownloadAppDataType[] = [
    {
      href: 'https://apps.apple.com/ca/app/bmo-mobile-banking/id429080319',
      ariaLabel:
        'Click to download BMO mobile banking app on Apple Store, opens in a new tab',
      imageSrc: 'assets/svg/apple-app-btn.svg',
      imageAlt: 'Download apple app',
    },
    {
      href: 'https://play.google.com/store/apps/details?id=com.bmo.mobile',
      ariaLabel:
        'Click to download BMO mobile banking app on Google Play store, opens in a new tab',
      imageSrc: 'assets/svg/google-app-btn.svg',
      imageAlt: 'Download google app',
    },
  ];
}
