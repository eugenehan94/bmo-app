import { Component, OnInit, ViewChild } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private store: Store<any>) {}

  isMobileMenuOpen?: boolean;

  @ViewChild('MobileMenuContainer') mobileMenuContainer: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
    });
  }

  // @NOTE: Parent component access this method using ViewChild
  handleMenuClick(): void {
    // Closes the mobile sign-in menu if it is open
    const signInMenu = document.querySelector(
      '.mobile-signin-btn-menu-container.open'
    );
    signInMenu?.classList.remove('open');
    this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: false }));

    const mobileSigninMenu = this.mobileMenuContainer.nativeElement;
    mobileSigninMenu.classList.add('open');
    // https://codepen.io/kevinpowell/pen/QWaBeGm
    if (this.isMobileMenuOpen) {
      mobileSigninMenu.classList.add('closing');
      // @NOTE: Waits for closing animation to finish - then component restarts
      // to original CSS with display: none. Thus, animation and tab-able protected.
      mobileSigninMenu.addEventListener(
        'animationend',
        () => {
          mobileSigninMenu.classList.remove('closing');
          mobileSigninMenu.classList.remove('open');
          this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));
        },
        { once: true }
      );
    } else {
      this.store.dispatch(setIsMobileMenuOpen({ isOpen: true }));
    }
  }
  backToMenuBtn(): void {
    document.getElementById('mobile-menu-btn')?.focus();
  }
}
