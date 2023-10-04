import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { DesktopService } from 'src/app/components/_shared/navbar/desktop/desktop.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';

// ngrx
import { Store } from '@ngrx/store';
import { setIsMobileSignInMenuOpen } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-desktop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class DesktopSignInComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private desktopService: DesktopService,
    private store: Store<any>
  ) {}
  isSigninMenuOpen?: boolean;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isSigninMenuOpen = res.isMobileSignInMenuOpen;
    });
  }
  handleSigninMenuClick(): void {
    this.desktopService.setCloseAll();
    this.store.dispatch(
      setIsMobileSignInMenuOpen({ isOpen: !this.isSigninMenuOpen })
    );
  }
}
