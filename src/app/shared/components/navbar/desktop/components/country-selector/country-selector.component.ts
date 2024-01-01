import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { CountryOptionsType } from 'src/app/interfaces/interfaces';
import { DesktopService } from 'src/app/shared/components/navbar/desktop/desktop.service';
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
  ariaActiveDescendent?: string = '';

  ngOnInit(): void {
    this.desktopService.isCountrySelectMenuOpen.subscribe((isOpen: boolean) => {
      this.isCountrySelectMenuOpen = isOpen;
    });
  }
  handleCountrySelectMenuClick(event: any): void {
    event.preventDefault();
    this.desktopService.setIsCountrySelectMenuOpen(
      !this.isCountrySelectMenuOpen
    );
  }
  optionOnFocus(number: number): void {
    this.ariaActiveDescendent = 'country_selector_' + number;
  }
}
