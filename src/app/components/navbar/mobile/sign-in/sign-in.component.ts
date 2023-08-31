import { Component, Output, EventEmitter } from '@angular/core';
import { NavbarService } from '../../../_shared/navbar/navbar.service';
import {
  SignInMenuOptionsType,
} from '../../../_shared/interfaces';
@Component({
  selector: 'app-mobile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  @Output() isMobileSignInMenuOpenChanged = new EventEmitter<any>();
  isMobileSignInMenuOpen: boolean = false;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  constructor(private navbarService: NavbarService){}

  handleSignInMenuClick(): void {
    this.isMobileSignInMenuOpen = !this.isMobileSignInMenuOpen;
    this.isMobileSignInMenuOpenChanged.emit(this.isMobileSignInMenuOpen);
  }
}
