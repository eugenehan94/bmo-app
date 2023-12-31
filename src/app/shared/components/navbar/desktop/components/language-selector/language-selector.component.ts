import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/shared/components/navbar/desktop/desktop.service';
@Component({
  selector: 'app-desktop-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  constructor(private desktopService: DesktopService) {}
  isLanguageSelectMenuOpen?: boolean;
  ariaActiveDescendent?: string = '';
  ngOnInit(): void {
    this.desktopService.isLanguageSelectMenuOpen.subscribe(
      (isOpen: boolean) => {
        this.isLanguageSelectMenuOpen = isOpen;
      }
    );
  }

  handleLanguageSelectMenuClick(event: any): void {
    event.preventDefault();
    this.desktopService.setIsLanguageSelectMenuOpen(
      !this.isLanguageSelectMenuOpen
    );
  }

  optionOnFocus(number: number): void {
    this.ariaActiveDescendent = 'lang-selector_' + number;
  }
}
