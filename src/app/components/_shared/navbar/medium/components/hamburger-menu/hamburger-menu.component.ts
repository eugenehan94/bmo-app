import { Component } from '@angular/core';

@Component({
  selector: 'app-medium-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class MediumHamburgerMenuComponent {
  isMobileMenuOpen: boolean = false;
}
