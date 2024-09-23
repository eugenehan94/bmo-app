import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/core/interfaces';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private navbarService: NavbarService) {}
  @Input() isSelectedSiteOpen?: boolean;
  @Output() isSelectedSiteOpenChange = new EventEmitter<boolean>();
  @Input() isCountrySelectMenuOpen?: boolean;
  @Output() isCountrySelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isLanguageSelectMenuOpen?: boolean;
  @Output() isLanguageSelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isSigninMenuOpen?: boolean;
  @Output() isSigninMenuOpenChange = new EventEmitter<boolean>();
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  ngOnInit(): void {}
  handleSigninMenuClick(): void {
    this.isSigninMenuOpenChange.emit(!this.isSigninMenuOpen);
    if (this.isSelectedSiteOpen) {
      this.isSelectedSiteOpenChange.emit(false);
    }
    if (this.isCountrySelectMenuOpen) {
      this.isCountrySelectMenuOpenChange.emit(false);
    }
    if (this.isLanguageSelectMenuOpen) {
      this.isLanguageSelectMenuOpenChange.emit(false);
    }
  }
  backtoSignBtn(): void {
    document.getElementById('signin-btn')?.focus();
  }
  handleFocu(): void {
    // this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
  }
}
