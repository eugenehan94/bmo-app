import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// ngrx
import { Store } from '@ngrx/store';
import { setIsMobileSignInMenuOpen } from 'src/app/store/app/actions/app.actions';

@Injectable({
  providedIn: 'root',
})
export class DesktopService {
  constructor(private store: Store<any>) {}

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
    this.store.dispatch(setIsMobileSignInMenuOpen({isOpen: false}))
    this.desktopSiteSelectorSource.next(isOpen);
  }

  getIsCountrySelectMenuOpen() {
    return this.isCountrySelectMenuOpen;
  }
  setIsCountrySelectMenuOpen(isOpen: boolean) {
    this.desktopSiteSelectorSource.next(false);
    this.desktopLanguageSelectorSource.next(false);
    this.store.dispatch(setIsMobileSignInMenuOpen({isOpen: false}))
    this.desktopCountrySelector.next(isOpen);
  }

  getIsLanguageSelectMenuOpen() {
    return this.isLanguageSelectMenuOpen;
  }
  setIsLanguageSelectMenuOpen(isOpen: boolean) {
    this.desktopCountrySelector.next(false);
    this.desktopSiteSelectorSource.next(false);
    this.store.dispatch(setIsMobileSignInMenuOpen({isOpen: false}))
    this.desktopLanguageSelectorSource.next(isOpen);
  }

  // NOTE: Closes the three selectors on desktop - b/c
  // the sign in state is stored elsewhere and is shared with all screen sizes
  setCloseAll() {
    this.desktopCountrySelector.next(false);
    this.desktopSiteSelectorSource.next(false);
    this.desktopLanguageSelectorSource.next(false);
  }
}
