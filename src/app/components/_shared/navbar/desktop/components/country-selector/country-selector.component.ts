import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import {
  SiteOptionsType,
  NavigationOptionsType,
  CountryOptionsType,
  SignInMenuOptionsType,
} from '../../../../interfaces';
@Component({
  selector: 'app-desktop-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css'],
})
export class CountrySelectorComponent {
  constructor(private navbarService: NavbarService) {}
  isCountrySelectMenuOpen: boolean = false;
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  handleCountrySelectMenuClick(): void {
    // this.isSelectedSiteOpen = false;
    // this.isLanguageSelectMenuOpen = false;
    // this.isSigninMenuOpen = false;
    this.isCountrySelectMenuOpen = !this.isCountrySelectMenuOpen;
  }
}
