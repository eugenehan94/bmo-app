import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-large',
  templateUrl: './navbar-large.component.html',
  styleUrl: './navbar-large.component.css',
})
export class NavbarLargeComponent {
  isSelectedSiteOpen?: boolean = false;
  isCountrySelectMenuOpen?: boolean = false;
  isLanguageSelectMenuOpen?: boolean = false;
  isSigninMenuOpen?: boolean = false;
}
