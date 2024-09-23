import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  constructor() {}
  @Input() isSelectedSiteOpen?: boolean;
  @Output() isSelectedSiteOpenChange = new EventEmitter<boolean>();
  @Input() isCountrySelectMenuOpen?: boolean;
  @Output() isCountrySelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isLanguageSelectMenuOpen?: boolean;
  @Output() isLanguageSelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isSigninMenuOpen?: boolean;
  @Output() isSigninMenuOpenChange = new EventEmitter<boolean>();
  ariaActiveDescendent?: string = '';
  ngOnInit(): void {}

  handleLanguageSelectMenuClick(event: any): void {
    event.preventDefault();
    this.isLanguageSelectMenuOpenChange.emit(!this.isLanguageSelectMenuOpen);
    if (this.isSelectedSiteOpen) {
      this.isSelectedSiteOpenChange.emit(false);
    }
    if (this.isCountrySelectMenuOpen) {
      this.isCountrySelectMenuOpenChange.emit(false);
    }
    if (this.isSigninMenuOpen) {
      this.isSigninMenuOpenChange.emit(false);
    }
  }

  optionOnFocus(number: number): void {
    this.ariaActiveDescendent = 'lang-selector_' + number;
  }
}
