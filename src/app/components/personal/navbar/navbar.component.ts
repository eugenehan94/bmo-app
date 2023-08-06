import { Component, Input } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-personal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  siteOptions = this.navbarService.siteOptions;
  navbarOptions = this.navbarService.navigationOptions;
  selectedSiteOption = 'Personal';
  isSelectedSiteOpen = false;


  @Input() currentScreenSize?: string;
  
  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;

  constructor(
    public navbarService: NavbarService,
  ) {}
}
