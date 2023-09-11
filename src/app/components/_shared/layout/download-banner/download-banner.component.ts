import { Component, Input } from '@angular/core';
import { DownloadBannerService } from './download-banner.service';
import { DownloadAppDataType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-download-banner-layout',
  templateUrl: './download-banner.component.html',
  styleUrls: ['./download-banner.component.css'],
})
export class SharedDownloadBannerComponent {
  constructor(private service: DownloadBannerService) {}
  @Input() title?: string;
  @Input() description?: string;
  @Input() linkName?: string;
  @Input() linkHref?: string;
  @Input() linkAriaLabel?: string;
  @Input() currentScreenSize?: string;
  downloadAppBtns: DownloadAppDataType[] = this.service.downloadAppData;
}
