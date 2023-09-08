import { Component } from '@angular/core';
import { SiteOptionsType } from 'src/app/components/_shared/interfaces';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';

@Component({
  selector: 'app-mobile-menu-site-selector',
  templateUrl: './menu-site-selector.component.html',
  styleUrls: ['./menu-site-selector.component.css'],
})
export class MenuSiteSelectorComponent {
  constructor(private navbarService: NavbarService) {}
  isSiteSelectMenuOpen: boolean = false;
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  handleSiteSelectMenuClick(): void {
    this.isSiteSelectMenuOpen = !this.isSiteSelectMenuOpen;
  }
}
