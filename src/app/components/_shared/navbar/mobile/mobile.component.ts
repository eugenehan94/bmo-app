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
}
