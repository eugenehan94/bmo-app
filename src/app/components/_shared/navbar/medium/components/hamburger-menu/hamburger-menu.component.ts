import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-medium-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class MediumHamburgerMenuComponent implements OnInit {
  constructor(private store: Store<any>) {}
  isMediumMenuOpen?: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res)=> {
      this.isMediumMenuOpen = res.isMobileMenuOpen;
    })
  }

  handleMenuClick(): void {
    this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: false }));
    this.store.dispatch(
      setIsMobileMenuOpen({ isOpen: !this.isMediumMenuOpen })
    );
  }
}
