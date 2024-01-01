import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-language-selector',
  templateUrl: './menu-language-selector.component.html',
  styleUrls: ['./menu-language-selector.component.css'],
})
export class MenuLanguageSelectorComponent {
  isLanguageSelectMenuOpen: boolean = false;
  handleLanguageSelectMenuClick(): void {
    this.isLanguageSelectMenuOpen = !this.isLanguageSelectMenuOpen;
  }
}
