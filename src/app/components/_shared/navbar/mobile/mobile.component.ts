import { Component, Input } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {
  SignInMenuOptionsType,
  MobileBottomNavOptionsType,
} from '../../interfaces';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  constructor(private navbarService: NavbarService) {}

  @Input() currentScreenSize?: string;

  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  mobileBottomNavOptions: MobileBottomNavOptionsType[] =
    this.navbarService.mobileBottomNavOptions;
}
