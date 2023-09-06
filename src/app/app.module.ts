import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// A service with all shared data - no need for prop drilling
import { AppService } from './app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/personal/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common';

// NOTE: This import houses all our Angular Material imports
import { MaterialDesignModule } from './material-design/material-design.module';
import { NavbarComponent } from './components/_shared/navbar/navbar.component';
import { HeroComponent } from './components/personal/hero/hero.component';
import { ProductsTabsComponent } from './components/personal/products-tabs/products-tabs.component';
import { DownloadBannerComponent } from './components/personal/download-banner/download-banner.component';
import { WhereToBeginComponent } from './components/personal/where-to-begin/where-to-begin.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { MobileComponent } from './components/_shared/navbar/mobile/mobile.component';
import { MediumComponent } from './components/_shared/navbar/medium/medium.component';
import { DesktopComponent } from './components/_shared/navbar/desktop/desktop.component';
import { SignInComponent } from './components/_shared/navbar/mobile/components/sign-in/sign-in.component';
import { MenuComponent } from './components/_shared/navbar/mobile/components/menu/menu.component';
import { HamburgerMenuComponent } from './components/_shared/navbar/mobile/components/hamburger-menu/hamburger-menu.component';
import { MenuSearchBarComponent } from './components/_shared/navbar/mobile/components/menu-search-bar/menu-search-bar.component';
import { MenuCountrySelectComponent } from './components/_shared/navbar/mobile/components/menu-country-select/menu-country-select.component';
import { MenuSiteSelectorComponent } from './components/_shared/navbar/mobile/components/menu-site-selector/menu-site-selector.component';
import { MenuLanguageSelectorComponent } from './components/_shared/navbar/mobile/components/menu-language-selector/menu-language-selector.component';
import { MenuInnerMenuComponent } from './components/_shared/navbar/mobile/components/menu-inner-menu/menu-inner-menu.component';
import { BottomNavigationComponent } from './components/_shared/navbar/mobile/components/bottom-navigation/bottom-navigation.component';
import { LogoComponent } from './components/_shared/navbar/mobile/components/logo/logo.component';
import { SiteSelectorComponent } from './components/_shared/navbar/desktop/components/site-selector/site-selector.component';
import { SearchBarComponent } from './components/_shared/navbar/desktop/components/search-bar/search-bar.component';
import { CountrySelectorComponent } from './components/_shared/navbar/desktop/components/country-selector/country-selector.component';
import { LanguageSelectorComponent } from './components/_shared/navbar/desktop/components/language-selector/language-selector.component';
import { DesktopSignInComponent } from './components/_shared/navbar/desktop/components/sign-in/sign-in.component';
import { NavigationBarComponent } from './components/_shared/navbar/desktop/components/navigation-bar/navigation-bar.component';
import { MediumLogoComponent } from './components/_shared/navbar/medium/components/logo/logo.component';
import { MediumSignInComponent } from './components/_shared/navbar/medium/components/sign-in/sign-in.component';
import { MediumHamburgerMenuComponent } from './components/_shared/navbar/medium/components/hamburger-menu/hamburger-menu.component';
import { MediumBottomNavigationComponent } from './components/_shared/navbar/medium/components/bottom-navigation/bottom-navigation.component';
import { MediumMenuComponent } from './components/_shared/navbar/medium/components/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ProductsTabsComponent,
    DownloadBannerComponent,
    WhereToBeginComponent,
    FooterComponent,
    MobileComponent,
    MediumComponent,
    DesktopComponent,
    SignInComponent,
    MenuComponent,
    HamburgerMenuComponent,
    MenuSearchBarComponent,
    MenuCountrySelectComponent,
    MenuSiteSelectorComponent,
    MenuLanguageSelectorComponent,
    MenuInnerMenuComponent,
    BottomNavigationComponent,
    LogoComponent,
    SiteSelectorComponent,
    SearchBarComponent,
    CountrySelectorComponent,
    LanguageSelectorComponent,
    DesktopSignInComponent,
    NavigationBarComponent,
    MediumLogoComponent,
    MediumSignInComponent,
    MediumHamburgerMenuComponent,
    MediumBottomNavigationComponent,
    MediumMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    NgOptimizedImage,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
