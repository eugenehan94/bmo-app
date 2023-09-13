import { Component, Input } from '@angular/core';
import { FooterService } from './footer.service';
import {
  CidcDataType,
  FooterCategoryLinksType,
  FooterSupportLinksType,
  SocialMediaDataType,
  AboutBmoDataType,
  DownloadAppDataType,
  FooterCaptionsType,
} from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  cdicData: CidcDataType[] = this.service.cdicData;
  footerSupportLinks: FooterSupportLinksType[] =
    this.service.footerSupportLinks;
  downloadAppBtns: DownloadAppDataType[] = this.service.downloadAppData;
  socialMediaData: SocialMediaDataType[] = this.service.socialMediaData;
  @Input() aboutBmoData?: AboutBmoDataType[];
  @Input() footerCategoryLinks?: FooterCategoryLinksType[];
  @Input() currentScreenSize?: string;
  @Input() footerCaptions?: FooterCaptionsType[];
  constructor(private service: FooterService) {}
}
