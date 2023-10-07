import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';

// ngrx
import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';
@Component({
  selector: 'app-mobile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private store: Store<any>
  ) {}
  isMobileSignInMenuOpen?: boolean;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  @ViewChild('MobileSigninMenuContainer') mobileSigninMenuContainer: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileSignInMenuOpen = res.isMobileSignInMenuOpen;
    });
  }
  handleSignInMenuClick(): void {
    // Closes the Menu option if it is open
    const mobileMenu = document.querySelector(
      '.mobile-menu-btn-menu-container.open'
    );
    mobileMenu?.classList.remove('open');
    this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));

    const mobileSigninMenu = this.mobileSigninMenuContainer.nativeElement;
    mobileSigninMenu.classList.add('open');
    // https://codepen.io/kevinpowell/pen/QWaBeGm
    if (this.isMobileSignInMenuOpen) {
      mobileSigninMenu.classList.add('closing');
      // @NOTE: Waits for closing animation to finish - then component restarts
      // to original CSS with display: none. Thus, animation and tab-able protected.
      mobileSigninMenu.addEventListener(
        'animationend',
        () => {
          mobileSigninMenu.classList.remove('closing');
          mobileSigninMenu.classList.remove('open');
          this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: false }));
        },
        { once: true }
      );
    } else {
      this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: true }));
    }
  }

  backToSignInBtn(): void {
    document.getElementById('signin-btn')?.focus();
  }
}
