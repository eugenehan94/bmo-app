import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/components/_shared/navbar/desktop/desktop.service';
@Component({
  selector: 'app-desktop-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  constructor(private desktopService: DesktopService) {}
  isLanguageSelectMenuOpen?: boolean;

  ngOnInit(): void {
    this.desktopService.isLanguageSelectMenuOpen.subscribe(
      (isOpen: boolean) => {
        this.isLanguageSelectMenuOpen = isOpen;
      }
    );
  }

  handleLanguageSelectMenuClick(): void {
    this.desktopService.setIsLanguageSelectMenuOpen(
      !this.isLanguageSelectMenuOpen
    );
  }
}
