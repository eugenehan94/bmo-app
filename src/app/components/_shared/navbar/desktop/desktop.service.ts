import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DesktopService {
  constructor() {}

  private desktopSiteSelectorSource = new BehaviorSubject<boolean>(false);
  private desktopCountrySelector = new BehaviorSubject<boolean>(false);
  isSelectedSiteOpen: Observable<boolean> =
    this.desktopSiteSelectorSource.asObservable();
  isCountrySelectMenuOpen: Observable<boolean> =
    this.desktopCountrySelector.asObservable();

  getIsSelectedSiteOpen() {
    return this.isSelectedSiteOpen;
  }
  setIsSelectedSiteOpen(isOpen: boolean) {
    this.desktopSiteSelectorSource.next(isOpen);
  }

  getIsCountrySelectMenuOpen() {
    return this.isCountrySelectMenuOpen;
  }
  setIsCountrySelectMenuOpen(isOpen: boolean) {
    this.desktopCountrySelector.next(isOpen);
  }
}
