import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  constructor() {}
  @Input() isLanguageSelectMenuOpen?: boolean;
  @Output() isLanguageSelectMenuOpenChange = new EventEmitter<boolean>();
  ariaActiveDescendent?: string = '';
  ngOnInit(): void {}

  handleLanguageSelectMenuClick(event: any): void {
    event.preventDefault();
    this.isLanguageSelectMenuOpenChange.emit(!this.isLanguageSelectMenuOpen);
  }

  optionOnFocus(number: number): void {
    this.ariaActiveDescendent = 'lang-selector_' + number;
  }
}
