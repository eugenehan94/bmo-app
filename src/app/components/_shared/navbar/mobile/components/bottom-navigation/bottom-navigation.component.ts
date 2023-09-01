import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from '../../../navbar.service';
import { MobileBottomNavOptionsType } from '../../../../interfaces';
@Component({
  selector: 'app-mobile-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css'],
})
export class BottomNavigationComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService
  ) {}
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;
  mobileBottomNavOptions: MobileBottomNavOptionsType[] =
    this.navbarService.mobileBottomNavOptions;

  ngOnInit(): void {
    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: boolean) => {
      this.isMobileSignInMenuOpen = isOpen;
    });
    this.appService.isMobileMenuOpen.subscribe((isOpen: boolean) => {
      this.isMobileMenuOpen = isOpen;
    });
  }
}
