import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../navbar.service';
import { MobileBottomNavOptionsType } from '../../../../interfaces';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mobile-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css'],
})
export class BottomNavigationComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private store: Store<any>
  ) {}
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;
  mobileBottomNavOptions: MobileBottomNavOptionsType[] =
    this.navbarService.mobileBottomNavOptions;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
      this.isMobileSignInMenuOpen = res.isMobileSignInMenuOpen;
    });
  }
}
