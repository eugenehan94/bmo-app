import { Component, Input } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {
  SiteOptionsType,
  NavigationOptionsType,
  CountryOptionsType,
  SignInMenuOptionsType,
} from '../../interfaces';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  constructor(private navbarService: NavbarService) {}

  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  navbarOptions: NavigationOptionsType[] = this.navbarService.navigationOptions;
  selectedSiteOption: string = 'Personal';
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  isSearchBarOpen: boolean = false;
  @Input() currentScreenSize?: string;

  isSelectedSiteOpen: boolean = false;
  isCountrySelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;
  isSigninMenuOpen: boolean = false;

  handleSelectedSiteMenuClick(): void {
    this.isLanguageSelectMenuOpen = false;
    this.isSigninMenuOpen = false;
    this.isCountrySelectMenuOpen = false;
    this.isSelectedSiteOpen = !this.isSelectedSiteOpen;
  }

  handleSearchBarClick(e: Event, input: boolean): void {
    e.stopPropagation();
    this.isSearchBarOpen = input;
  }

  handleCountrySelectMenuClick(): void {
    this.isSelectedSiteOpen = false;
    this.isLanguageSelectMenuOpen = false;
    this.isSigninMenuOpen = false;
    this.isCountrySelectMenuOpen = !this.isCountrySelectMenuOpen;
  }
  handleLanguageSelectMenuClick(): void {
    this.isSelectedSiteOpen = false;
    this.isCountrySelectMenuOpen = false;
    this.isSigninMenuOpen = false;
    this.isLanguageSelectMenuOpen = !this.isLanguageSelectMenuOpen;
  }
  handleSigninMenuClick(): void {
    this.isSelectedSiteOpen = false;
    this.isLanguageSelectMenuOpen = false;
    this.isCountrySelectMenuOpen = false;
    this.isSigninMenuOpen = !this.isSigninMenuOpen;
  }
}
