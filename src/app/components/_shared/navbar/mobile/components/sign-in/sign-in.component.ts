import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SignInMenuOptionsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-mobile-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit, AfterViewInit {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService
  ) {}
  isMobileSignInMenuOpen?: boolean;
  signInMenuOptions: SignInMenuOptionsType[] =
    this.navbarService.signInMenuOptions;
  @ViewChild('signinContainer') container: any;
  ngOnInit(): void {
    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: any) => {
      this.isMobileSignInMenuOpen = isOpen;
    });
  }
  ngAfterViewInit() {
    let height = this.container.nativeElement.offsetHeight;
    this.appService.setMobileSignInHeight(height);
  }
  handleSignInMenuClick(): void {
    // Closes the Menu option if it is open
    this.appService.setIsMobileMenuOpen(false);
    this.appService.setIsMobileSignInMenuOpen(!this.isMobileSignInMenuOpen);
  }
}
