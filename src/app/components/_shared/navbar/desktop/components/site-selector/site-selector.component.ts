import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import {
  SiteOptionsType,
  NavigationOptionsType,
  CountryOptionsType,
  SignInMenuOptionsType,
} from '../../../../interfaces';
@Component({
  selector: 'app-desktop-site-selector',
  templateUrl: './site-selector.component.html',
  styleUrls: ['./site-selector.component.css'],
})
export class SiteSelectorComponent {
  constructor(private navbarService: NavbarService) {}
  isSelectedSiteOpen: boolean = false;
  selectedSiteOption: string = 'Personal';
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  handleSelectedSiteMenuClick(): void {
    // this.isLanguageSelectMenuOpen = false;
    // this.isSigninMenuOpen = false;
    // this.isCountrySelectMenuOpen = false;
    this.isSelectedSiteOpen = !this.isSelectedSiteOpen;
  }
}
