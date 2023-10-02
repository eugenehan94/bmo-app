import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NavbarService } from '../../../navbar.service';
import { MobileBottomNavOptionsType } from '../../../../interfaces';

//ngrx
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-medium-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css'],
})
export class MediumBottomNavigationComponent implements OnInit {
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
    // this.appService.isMobileMenuOpen.subscribe((isOpen: boolean) => {
    //   this.isMobileMenuOpen = isOpen;
    // });
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMobileMenuOpen = res;
    })
  }
}
