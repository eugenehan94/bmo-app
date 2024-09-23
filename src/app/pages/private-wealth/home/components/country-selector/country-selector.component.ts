import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { CountryOptionsType } from 'src/app/core/interfaces';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css',
})
export class CountrySelectorComponent {
  constructor(private navbarService: NavbarService) {}
  @Input() isCountrySelectMenuOpen?: boolean;
  @Output() isCountrySelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isSelectedSiteOpen?: boolean;
  @Output() isSelectedSiteOpenChange = new EventEmitter<boolean>();
  @Input() isLanguageSelectMenuOpen?: boolean;
  @Output() isLanguageSelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isSigninMenuOpen?: boolean;
  @Output() isSigninMenuOpenChange = new EventEmitter<boolean>();
  countryOptions: CountryOptionsType[] = this.navbarService.countryOptions;
  ariaActiveDescendent?: string = '';

  ngOnInit(): void {}
  handleCountrySelectMenuClick(event: any): void {
    event.preventDefault();
    this.isCountrySelectMenuOpenChange.emit(!this.isCountrySelectMenuOpen);
    if (this.isSelectedSiteOpen) {
      this.isSelectedSiteOpenChange.emit(false);
    }
    if (this.isLanguageSelectMenuOpen) {
      this.isLanguageSelectMenuOpenChange.emit(false);
    }
    if (this.isSigninMenuOpen) {
      this.isSigninMenuOpenChange.emit(false);
    }
  }
  optionOnFocus(number: number): void {
    this.ariaActiveDescendent = 'country_selector_' + number;
  }
}
