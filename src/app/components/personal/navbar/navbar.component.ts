import { Component, Input } from '@angular/core';
import { NavbarService } from './navbar.service';
import {
  SiteOptionsType,
  NavigationOptionsType,
} from '../../_shared/interfaces';

@Component({
  selector: 'app-personal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  navbarOptions: NavigationOptionsType[] = this.navbarService.navigationOptions;
  selectedSiteOption: string = 'Personal';
  isSelectedSiteOpen: boolean = false;
  isSearchBarOpen: boolean = false;
  @Input() currentScreenSize?: string;

  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;

  constructor(public navbarService: NavbarService) {}
}
