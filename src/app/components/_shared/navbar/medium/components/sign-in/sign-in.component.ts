import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';

//ngrx
import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-medium-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class MediumSignInComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private store: Store<any>
  ) {}
  isMediumSignInMenuOpen?: boolean;

  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  @ViewChild('MediumSigninMenuContainer') mediumSigninMenuContainer: any;
  @ViewChild('MediumSigninMenuOverlay') mediumSigninMenuOverlay: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMediumSignInMenuOpen = res.isMobileSignInMenuOpen;
    });
  }

  handleSignInClick(): void {
    const mediumMenu = document.querySelector('.medium-menu-container.open');
    mediumMenu?.classList.remove('open');
    this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));

    const mediumSigninMenu = this.mediumSigninMenuContainer.nativeElement;
    const mediumSigninMenuOverlay = this.mediumSigninMenuOverlay.nativeElement;
    mediumSigninMenu.classList.add('open');
    mediumSigninMenuOverlay.classList.add('open');
    // https://codepen.io/kevinpowell/pen/QWaBeGm
    if (this.isMediumSignInMenuOpen) {
      mediumSigninMenuOverlay.classList.add('closing');
      mediumSigninMenu.classList.add('closing');
      // @NOTE: Waits for closing animation to finish - then component restarts
      // to original CSS with display: none. Thus, animation and tab-able protected.
      mediumSigninMenu.addEventListener(
        'animationend',
        () => {
          mediumSigninMenu.classList.remove('closing');
          mediumSigninMenu.classList.remove('open');
          mediumSigninMenuOverlay.classList.remove('closing');
          mediumSigninMenuOverlay.classList.remove('open');
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
