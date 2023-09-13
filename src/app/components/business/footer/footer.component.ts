import { Component, Input } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
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
  @Input() currentScreenSize?: string;
}
