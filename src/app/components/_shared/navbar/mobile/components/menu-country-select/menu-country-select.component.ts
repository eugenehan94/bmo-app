import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { CountryOptionsType } from 'src/app/components/_shared/interfaces';

@Component({
  selector: 'app-mobile-menu-country-select',
  templateUrl: './menu-country-select.component.html',
  styleUrls: ['./menu-country-select.component.css'],
})
export class MenuCountrySelectComponent {
  constructor(private navbarService: NavbarService) {}
  isCountrySelectMenuOpen: boolean = false;
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  handleCountrySelectMenuClick(): void {
    this.isCountrySelectMenuOpen = !this.isCountrySelectMenuOpen;
  }
}
