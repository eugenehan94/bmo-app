import { Component, Input } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  constructor(private navbarService: NavbarService) {}

  @Input() currentScreenSize?: string;

  isSelectedSiteOpen?: boolean;
  isCountrySelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;

}
