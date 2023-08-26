import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {
  SignInMenuOptionsType,
  MobileBottomNavOptionsType,
  CountryOptionsType,
  SiteOptionsType,
} from '../../interfaces';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  constructor(private navbarService: NavbarService) {}

  @Input() currentScreenSize?: string;
  @Output() isMobileSignInMenuOpenChanged = new EventEmitter<any>();
  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;
  isMobileMenuSearchSelected: boolean = false;
  isCountrySelectMenuOpen: boolean = false;
  isSiteSelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;

  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  mobileBottomNavOptions: MobileBottomNavOptionsType[] =
    this.navbarService.mobileBottomNavOptions;
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  navigationOptions: any = this.navbarService.navigationOptions;

  handleSignInMenuClick(): void {
    this.isMobileSignInMenuOpen = !this.isMobileSignInMenuOpen;
    this.isMobileSignInMenuOpenChanged.emit(this.isMobileSignInMenuOpen);
  }
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
  testClick(event: any, i: number): void {
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
