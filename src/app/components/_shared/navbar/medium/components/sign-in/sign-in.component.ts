import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';

//ngrx
import { Store } from '@ngrx/store';
import { setIsMobileMenuOpen } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-medium-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class MediumSignInComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService,
    private store: Store<any>
  ) {}
  isMediumSignInMenuOpen?: boolean;

  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  ngOnInit(): void {
    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: boolean) => {
      this.isMediumSignInMenuOpen = isOpen;
    });
  }

  handleSignInClick(): void {
    this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));
    this.appService.setIsMobileSignInMenuOpen(!this.isMediumSignInMenuOpen);
  }
}
