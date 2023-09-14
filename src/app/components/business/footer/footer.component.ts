import { Component, Input } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
  FooterCaptionsType,
} from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-business-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class BusinessFooterComponent {
  constructor(private businessFooterService: FooterService) {}
  footerCategoryLinks: FooterCategoryLinksType[] =
    this.businessFooterService.footerCategoryLinks;
  aboutBmoData: AboutBmoDataType[] = this.businessFooterService.aboutBmoData;
  footerCaptions: FooterCaptionsType[] =
    this.businessFooterService.footerCaptions;
  @Input() currentScreenSize?: string;
}
