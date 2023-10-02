import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from '../../../navbar.service';
import { MobileBottomNavOptionsType } from '../../../../interfaces';

import {Store} from "@ngrx/store";

@Component({
  selector: 'app-mobile-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css'],
})
export class BottomNavigationComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private appService: AppService,
    private store: Store<any>
  ) {}
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;
  mobileBottomNavOptions: MobileBottomNavOptionsType[] =
    this.navbarService.mobileBottomNavOptions;

  ngOnInit(): void {
    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: boolean) => {
      this.isMobileSignInMenuOpen = isOpen;
    });
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMobileMenuOpen = res;
    })
  }
}
