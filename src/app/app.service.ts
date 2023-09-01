// https://stackoverflow.com/questions/76401075/how-to-pass-data-to-two-level-three-level-down-in-angular-component-whats-the
import { Injectable } from '@angular/core';
// https://medium.com/@ankit00tiet/sharing-data-between-angular-components-3fb04b645970
// https://www.danywalls.com/how-to-share-data-between-components-in-angular
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  private mobileNavSource = new BehaviorSubject<boolean>(false);
  private mobileSignInSource = new BehaviorSubject<boolean>(false);
  isMobileMenuOpen: Observable<boolean> = this.mobileNavSource.asObservable();
  isMobileSignInMenuOpen: Observable<boolean> =
    this.mobileSignInSource.asObservable();
  mobileSignInHeight?: number;
  setIsMobileMenuOpen(isOpen: boolean) {
    this.mobileNavSource.next(isOpen);
  }
  getIsMobileMenuOpen() {
    return this.isMobileMenuOpen;
  }
  setIsMobileSignInMenuOpen(isOpen: boolean) {
    this.mobileSignInSource.next(isOpen);
  }
  getIsMobileSignInMenuOpen() {
    return this.isMobileSignInMenuOpen;
  }
  setMobileSignInHeight(height: number) {
    this.mobileSignInHeight = height;
  }
  getMobileSignInHeight() {
    return this.mobileSignInHeight;
  }
}
