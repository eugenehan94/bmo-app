import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
@Injectable({
  providedIn: 'root',
})
export class DesktopService {
  constructor(private appService: AppService) {}

  private desktopSiteSelectorSource = new BehaviorSubject<boolean>(false);
  private desktopCountrySelector = new BehaviorSubject<boolean>(false);
  private desktopLanguageSelectorSource = new BehaviorSubject<boolean>(false);
  isSelectedSiteOpen: Observable<boolean> =
    this.desktopSiteSelectorSource.asObservable();
  isCountrySelectMenuOpen: Observable<boolean> =
    this.desktopCountrySelector.asObservable();
  isLanguageSelectMenuOpen: Observable<boolean> =
    this.desktopLanguageSelectorSource.asObservable();

  getIsSelectedSiteOpen() {
    return this.isSelectedSiteOpen;
  }
  setIsSelectedSiteOpen(isOpen: boolean) {
    this.desktopCountrySelector.next(false);
    this.desktopLanguageSelectorSource.next(false);
    this.appService.setIsMobileSignInMenuOpen(false);
    this.desktopSiteSelectorSource.next(isOpen);
  }

  getIsCountrySelectMenuOpen() {
    return this.isCountrySelectMenuOpen;
  }
  setIsCountrySelectMenuOpen(isOpen: boolean) {
    this.desktopSiteSelectorSource.next(false);
    this.desktopLanguageSelectorSource.next(false);
    this.appService.setIsMobileSignInMenuOpen(false);
    this.desktopCountrySelector.next(isOpen);
  }

  getIsLanguageSelectMenuOpen() {
    return this.isLanguageSelectMenuOpen;
  }
  setIsLanguageSelectMenuOpen(isOpen: boolean) {
    this.desktopCountrySelector.next(false);
    this.desktopSiteSelectorSource.next(false);
    this.appService.setIsMobileSignInMenuOpen(false);
    this.desktopLanguageSelectorSource.next(isOpen);
  }
}
