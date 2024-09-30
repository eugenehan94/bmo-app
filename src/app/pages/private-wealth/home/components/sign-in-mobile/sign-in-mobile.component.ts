import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-sign-in-mobile',
  templateUrl: './sign-in-mobile.component.html',
  styleUrl: './sign-in-mobile.component.css',
})
export class SignInMobileComponent {
  constructor(private navbarService: NavbarService) {}
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();
  @ViewChild('signInBtn') signInBtn?: any;
  signInMenuOptions: any = this.navbarService.signInMenuOptions;

  onKeyDown(event: KeyboardEvent) {
    // Prevents tab navigation from leaving button that toggles the menu if its opened
    if (event.key === 'Tab' && event.shiftKey && this.isMobileSignInMenuOpen) {
      event.preventDefault();
    }
    // If sign in menu is not open, tab navigation will go the next menu button
    if (
      event.key === 'Tab' &&
      !event.shiftKey &&
      !this.isMobileSignInMenuOpen
    ) {
      event.preventDefault();
      const hamburgerMenuBtnElement = document.querySelector(
        '#mobile-hamburger-menu-btn'
      ) as HTMLButtonElement;
      hamburgerMenuBtnElement?.focus();
    }
  }

  toggleSignInMenu() {
    this.isMobileMenuOpenChange.emit(false);
    this.isMobileSignInMenuOpenChange.emit(!this.isMobileSignInMenuOpen);
  }

  onKeyDownSignInList(event: any, last: boolean) {
    if (last) {
      event.preventDefault();
      this.signInBtn.focus();
    }
  }
}
