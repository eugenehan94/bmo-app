import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-mobile',
  templateUrl: './hamburger-menu-mobile.component.html',
  styleUrl: './hamburger-menu-mobile.component.css',
})
export class HamburgerMenuMobileComponent {
  constructor() {}
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();

  toggleHamburgerMenu() {
    this.isMobileSignInMenuOpenChange.emit(false);
    this.isMobileMenuOpenChange.emit(!this.isMobileMenuOpen);
  }
}
