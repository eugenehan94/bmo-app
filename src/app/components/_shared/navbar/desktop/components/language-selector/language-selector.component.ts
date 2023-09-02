import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent {
  isLanguageSelectMenuOpen: boolean = false;
  handleLanguageSelectMenuClick(): void {
    // this.isSelectedSiteOpen = false;
    // this.isCountrySelectMenuOpen = false;
    // this.isSigninMenuOpen = false;
    this.isLanguageSelectMenuOpen = !this.isLanguageSelectMenuOpen;
  }
}
