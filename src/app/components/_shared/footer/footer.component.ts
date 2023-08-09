import { Component } from '@angular/core';
import { FooterService } from './footer.service';
import {
  CidcDataType,
  FooterCategoryLinksType,
  FooterSupportLinksType,
  SocialMediaDataType,
  AboutBmoDataType,
  DownloadAppDataType,
} from '../interfaces';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  cdicData: CidcDataType[] = this.service.cdicData;
  footerCategoryLinks: FooterCategoryLinksType[] =
    this.service.footerCategoryLinks;
  footerSupportLinks: FooterSupportLinksType[] =
    this.service.footerSupportLinks;
  socialMediaData: SocialMediaDataType[] = this.service.socialMediaData;
  aboutBmoData: AboutBmoDataType[] = this.service.aboutBmoData;
  downloadAppBtns: DownloadAppDataType[] = this.service.downloadAppData;
  constructor(private service: FooterService) {}
}
