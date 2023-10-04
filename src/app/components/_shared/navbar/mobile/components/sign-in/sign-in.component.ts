import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';

// ngrx
import { Store } from '@ngrx/store';
import { setIsMobileMenuOpen, setIsMobileSignInMenuOpen } from 'src/app/store/app/actions/app.actions';
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

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileSignInMenuOpen = res.isMobileSignInMenuOpen;
    })
  }
  handleSignInMenuClick(): void {
    // Closes the Menu option if it is open
    this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));
    this.store.dispatch(setIsMobileSignInMenuOpen({isOpen: !this.isMobileSignInMenuOpen}))
  }
}
