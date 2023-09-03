import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-desktop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class DesktopSignInComponent {
  constructor(private navbarService: NavbarService) {}
  isSigninMenuOpen: boolean = false;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  handleSigninMenuClick(): void {
    // this.isSelectedSiteOpen = false;
    // this.isLanguageSelectMenuOpen = false;
    // this.isCountrySelectMenuOpen = false;
    this.isSigninMenuOpen = !this.isSigninMenuOpen;
  }
}
