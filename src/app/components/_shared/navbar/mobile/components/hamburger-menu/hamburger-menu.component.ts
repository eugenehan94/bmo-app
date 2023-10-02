import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { Store } from '@ngrx/store';
import { setIsMobileMenuOpen } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-mobile-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent implements OnInit {
  constructor(private appService: AppService, private store: Store<any>) {}
 
  isMobileMenuOpen?: any;

  ngOnInit(): void {
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMobileMenuOpen = res;
     
    });
  }

  handleClick(): void {
    // Close the Sign In menu if it is open
    // this.appService.setIsMobileSignInMenuOpen(false);
    // this.appService.setIsMobileMenuOpen(!this.isMobileMenuOpen);

    this.store.dispatch(setIsMobileMenuOpen({ isOpen: !this.isMobileMenuOpen }));
  }
}
