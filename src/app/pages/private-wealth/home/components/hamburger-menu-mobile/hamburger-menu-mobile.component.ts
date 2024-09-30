import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  @ViewChild('searchInput') searchInput?: ElementRef;
  isSearchMenuSelected: boolean = false;
  toggleHamburgerMenu() {
    this.isMobileSignInMenuOpenChange.emit(false);
    this.isMobileMenuOpenChange.emit(!this.isMobileMenuOpen);
  }

  handleSearchMenuSelected(input: boolean) {
    this.isSearchMenuSelected = input;
  }
  handleSearchCancelBtnFocusout() {
    this.isSearchMenuSelected = false;
  }
}
