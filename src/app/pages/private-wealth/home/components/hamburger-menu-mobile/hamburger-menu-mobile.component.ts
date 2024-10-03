import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { HamburgerMenuMobileService } from './hamburger-menu-mobile.service';

@Component({
  selector: 'app-hamburger-menu-mobile',
  templateUrl: './hamburger-menu-mobile.component.html',
  styleUrl: './hamburger-menu-mobile.component.css',
})
export class HamburgerMenuMobileComponent {
  constructor(private hamburgerMenuMobileService: HamburgerMenuMobileService) {}
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();
  @ViewChild('searchInput') searchInput?: ElementRef;
  isSearchMenuSelected: boolean = false;
  countrySelectorMenuOptions: any =
    this.hamburgerMenuMobileService.countrySelectorMenuOptions;
  isCountrySelectorOpen: boolean = false;
  isSiteSelectorOpen: boolean = false;
  siteSelectorMenuOptions: any =
    this.hamburgerMenuMobileService.siteSelectorMenuOptions;
  isLangSelectorOpen: boolean = false;
  langSelectorMenuOptions: any =
    this.hamburgerMenuMobileService.langSelectorMenuOptions;
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
  toggleIsCountrySelectorOpen() {
    this.isCountrySelectorOpen = !this.isCountrySelectorOpen;
  }
  countrySelectorKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.toggleIsCountrySelectorOpen();
    }
  }
  toggleIsSiteSelectorOpen() {
    this.isSiteSelectorOpen = !this.isSiteSelectorOpen;
  }
  siteSelectorKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.toggleIsSiteSelectorOpen();
    }
  }
  toggleIsLangSelectorOpen() {
    this.isLangSelectorOpen = !this.isLangSelectorOpen;
  }
  langSelectorKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.toggleIsLangSelectorOpen();
    }
  }
}
