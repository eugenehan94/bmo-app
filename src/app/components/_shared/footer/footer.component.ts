import { Component } from '@angular/core';
import { FooterService } from './footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  cdicData: any = this.service.cdicData;
  footerCategoryLinks: any = this.service.footerCategoryLinks;
  footerSupportLinks: any = this.service.footerSupportLinks;
  socialMediaData: any = this.service.socialMediaData;
  aboutBmoData: any = this.service.aboutBmoData;
  constructor(private service: FooterService) {}
}
