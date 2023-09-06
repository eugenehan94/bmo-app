import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { DesktopService } from 'src/app/components/_shared/navbar/desktop/desktop.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-desktop-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class DesktopSignInComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService,
    private desktopService: DesktopService
  ) {}
  isSigninMenuOpen?: boolean;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;

  ngOnInit(): void {
    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: boolean) => {
      this.isSigninMenuOpen = isOpen;
    });
  }
  handleSigninMenuClick(): void {
    this.desktopService.setCloseAll();
    this.appService.setIsMobileSignInMenuOpen(!this.isSigninMenuOpen);
  }
}
