import { Component, Input } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
} from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-personal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class PersonalFooterComponent {
  constructor(private service: FooterService) {}
  footerCategoryLinks: FooterCategoryLinksType[] =
    this.service.footerCategoryLinks;
  aboutBmoData: AboutBmoDataType[] = this.service.aboutBmoData;
  @Input() currentScreenSize?: string;
}
