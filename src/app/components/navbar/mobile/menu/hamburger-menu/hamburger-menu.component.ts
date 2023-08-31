import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

  isMobileMenuOpen: boolean = false;

}
