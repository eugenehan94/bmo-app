import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
// desktop
import { DesktopComponent } from './desktop/desktop.component';
import { CountrySelectorComponent } from './desktop/components/country-selector/country-selector.component';
import { LanguageSelectorComponent } from './desktop/components/language-selector/language-selector.component';
import { NavigationBarComponent } from './desktop/components/navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './desktop/components/search-bar/search-bar.component';
import { DesktopSignInComponent } from './desktop/components/sign-in/sign-in.component';
import { SiteSelectorComponent } from './desktop/components/site-selector/site-selector.component';
// medium
import { MediumComponent } from './medium/medium.component';
import { MediumBottomNavigationComponent } from './medium/components/bottom-navigation/bottom-navigation.component';
import { MediumHamburgerMenuComponent } from './medium/components/hamburger-menu/hamburger-menu.component';
import { MediumLogoComponent } from './medium/components/logo/logo.component';
import { MediumMenuComponent } from './medium/components/menu/menu.component';
import { MediumSignInComponent } from './medium/components/sign-in/sign-in.component';
// mobile
import { MobileComponent } from './mobile/mobile.component';
import { BottomNavigationComponent } from './mobile/components/bottom-navigation/bottom-navigation.component';
import { HamburgerMenuComponent } from './mobile/components/hamburger-menu/hamburger-menu.component';
import { LogoComponent } from './mobile/components/logo/logo.component';
import { MenuComponent } from './mobile/components/menu/menu.component';
import { MenuCountrySelectComponent } from './mobile/components/menu-country-select/menu-country-select.component';
import { MenuInnerMenuComponent } from './mobile/components/menu-inner-menu/menu-inner-menu.component';
import { MenuLanguageSelectorComponent } from './mobile/components/menu-language-selector/menu-language-selector.component';
import { MenuSearchBarComponent } from './mobile/components/menu-search-bar/menu-search-bar.component';
import { MenuSiteSelectorComponent } from './mobile/components/menu-site-selector/menu-site-selector.component';
import { SignInComponent } from './mobile/components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    DesktopComponent,
    CountrySelectorComponent,
    LanguageSelectorComponent,
    NavigationBarComponent,
    SearchBarComponent,
    DesktopSignInComponent,
    SiteSelectorComponent,
    MediumBottomNavigationComponent,
    MediumLogoComponent,
    MediumSignInComponent,
    BottomNavigationComponent,
    LogoComponent,
    MenuCountrySelectComponent,
    MenuInnerMenuComponent,
    MenuLanguageSelectorComponent,
    MenuSearchBarComponent,
    MenuSiteSelectorComponent,
    SignInComponent,
    MediumMenuComponent,
    MenuComponent,
    MediumHamburgerMenuComponent,
    MediumComponent,
    HamburgerMenuComponent,
    MobileComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, MaterialDesignModule, RouterModule],
  exports: [
    DesktopComponent,
    CountrySelectorComponent,
    LanguageSelectorComponent,
    NavigationBarComponent,
    SearchBarComponent,
    DesktopSignInComponent,
    SiteSelectorComponent,
    MediumBottomNavigationComponent,
    MediumLogoComponent,
    MediumSignInComponent,
    BottomNavigationComponent,
    LogoComponent,
    MenuCountrySelectComponent,
    MenuInnerMenuComponent,
    MenuLanguageSelectorComponent,
    MenuSearchBarComponent,
    MenuSiteSelectorComponent,
    SignInComponent,
    MediumMenuComponent,
    MenuComponent,
    MediumHamburgerMenuComponent,
    MediumComponent,
    HamburgerMenuComponent,
    MobileComponent,
    NavbarComponent,
  ],
})
export class SharedNavbarModule {}
