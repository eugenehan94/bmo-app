import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-mobile-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent implements OnInit {
  constructor(private appService: AppService) {}
  isMobileMenuOpen?: boolean;

  ngOnInit(): void {
    this.appService.isMobileMenuOpen.subscribe((isOpen: any) => {
      this.isMobileMenuOpen = isOpen;
    });
  }

  handleClick(): void {
    // Close the Sign In menu if it is open
    this.appService.setIsMobileSignInMenuOpen(false);
    this.appService.setIsMobileMenuOpen(!this.isMobileMenuOpen);
  }
}
