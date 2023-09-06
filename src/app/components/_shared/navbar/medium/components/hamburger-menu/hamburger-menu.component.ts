import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-medium-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class MediumHamburgerMenuComponent implements OnInit {
  constructor(private appService: AppService) {}
  isMediumMenuOpen: boolean = false;

  ngOnInit(): void {
    this.appService.isMobileMenuOpen.subscribe((isOpen: boolean) => {
      this.isMediumMenuOpen = isOpen;
    });
  }

  handleMenuClick(): void {
    this.appService.setIsMobileSignInMenuOpen(false);
    this.appService.setIsMobileMenuOpen(!this.isMediumMenuOpen);
  }
}
