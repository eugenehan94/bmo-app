import { Component, Input } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {
  SiteOptionsType,
  NavigationOptionsType,
  CountryOptionsType,
  SignInMenuOptionsType,
} from '../../interfaces';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent {
  constructor(private navbarService: NavbarService) {}


  navbarOptions: NavigationOptionsType[] = this.navbarService.navigationOptions;

  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  @Input() currentScreenSize?: string;

  isSelectedSiteOpen: boolean = false;
  isCountrySelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;
  isSigninMenuOpen: boolean = false;




  handleSigninMenuClick(): void {
    this.isSelectedSiteOpen = false;
    this.isLanguageSelectMenuOpen = false;
    this.isCountrySelectMenuOpen = false;
    this.isSigninMenuOpen = !this.isSigninMenuOpen;
  }
}
