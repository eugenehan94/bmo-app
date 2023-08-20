import { Component, Input } from '@angular/core';
// @TODO: Refactor service - make sure to keep dynamic for other pages have different values
import { NavbarService } from '../../../../components/personal/navbar/navbar.service';
import { SiteOptionsType, NavigationOptionsType } from '../../interfaces';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  navbarOptions: NavigationOptionsType[] = this.navbarService.navigationOptions;
  selectedSiteOption: string = 'Personal';
  isSelectedSiteOpen: boolean = false;
  isSearchBarOpen: boolean = false;
  @Input() currentScreenSize?: string;

  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;

  isCountrySelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;
  constructor(private navbarService: NavbarService) {}

  handleCountrySelectMenuClick(): void {
    this.isLanguageSelectMenuOpen = false;
    this.isCountrySelectMenuOpen = !this.isCountrySelectMenuOpen;
  }
  handleLanguageSelectMenuClick(): void {
    this.isCountrySelectMenuOpen = false;
    this.isLanguageSelectMenuOpen = !this.isLanguageSelectMenuOpen;
  }
}
