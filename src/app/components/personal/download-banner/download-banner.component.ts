import { Component, Input } from '@angular/core';
import { DownloadBannerService } from './download-banner.service';
import { DownloadAppDataType } from 'src/app/components/_shared/interfaces';

@Component({
  selector: 'app-person-download-banner',
  templateUrl: './download-banner.component.html',
  styleUrls: ['./download-banner.component.css'],
})
export class DownloadBannerComponent {
  title: string = 'Get our award-winning mobile banking app';
  description: string =
    'Our app ranked #1 number onein Canada for digital money management. Enjoy 20+ twenty plusfeatures – from spending insights to global transfers.';
  linkName: string = 'Explore Features';
  @Input() currentScreenSize?: string;
  downloadAppBtns: DownloadAppDataType[] = this.service.downloadAppData;
  constructor(private service: DownloadBannerService) {}
}
