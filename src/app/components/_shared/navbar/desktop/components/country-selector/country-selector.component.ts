import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { CountryOptionsType } from 'src/app/components/_shared/interfaces';
import { DesktopService } from 'src/app/components/_shared/navbar/desktop/desktop.service';
@Component({
  selector: 'app-desktop-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css'],
})
export class CountrySelectorComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private desktopService: DesktopService
  ) {}
  isCountrySelectMenuOpen?: boolean;
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;

  ngOnInit(): void {
    this.desktopService.isCountrySelectMenuOpen.subscribe((isOpen: boolean) => {
      this.isCountrySelectMenuOpen = isOpen;
    });
  }
  handleCountrySelectMenuClick(): void {
    // this.isSelectedSiteOpen = false;
    // this.isLanguageSelectMenuOpen = false;
    // this.isSigninMenuOpen = false;
    this.desktopService.setIsCountrySelectMenuOpen(
      !this.isCountrySelectMenuOpen
    );
  }
}
