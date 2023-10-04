import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-mobile-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent implements OnInit {
  constructor(private store: Store<any>) {}

  isMobileMenuOpen?: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
    });
  }

  handleClick(): void {
    // Close the Sign In menu if it is open
    this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: false }));
    this.store.dispatch(
      setIsMobileMenuOpen({ isOpen: !this.isMobileMenuOpen })
    );
  }
}
