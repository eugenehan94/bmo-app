import { Component } from '@angular/core';
import { NavbarService } from '../../../_shared/navbar/navbar.service';
import {
  CountryOptionsType,
  SiteOptionsType,
} from '../../../_shared/interfaces';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private navbarService: NavbarService) {}

  isMobileMenuOpen: boolean = false;
  isMobileMenuSearchSelected: boolean = false;
  isCountrySelectMenuOpen: boolean = false;
  isSiteSelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  navigationOptions: any = this.navbarService.navigationOptions;

  handleMobileMenuSearchClick(input: boolean): void {
    this.isMobileMenuSearchSelected = input;
  }
  handleCountrySelectMenuClick(): void {
    this.isCountrySelectMenuOpen = !this.isCountrySelectMenuOpen;
  }
  handleSiteSelectMenuClick(): void {
    this.isSiteSelectMenuOpen = !this.isSiteSelectMenuOpen;
  }
  handleLanguageSelectMenuClick(): void {
    this.isLanguageSelectMenuOpen = !this.isLanguageSelectMenuOpen;
  }
  handleCategoryClick(j: number): void {
    const categoryContainer = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-container'
    );
    categoryContainer[j].classList.toggle('open');
  }
  testClick(event: any, i: number, j: number): void {
    console.log(' i and j: ', i, j);
    const childrenDropdownContainer = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-child-container'
    );
    const chevron = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-chevron'
    );

    const childrenTextOfDropdown = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-with-children'
    );
    childrenDropdownContainer[i - 1].classList.toggle('open');
    chevron[i - 1].classList.toggle('open');
    childrenTextOfDropdown[i - 1].classList.toggle('open');
  }
}
