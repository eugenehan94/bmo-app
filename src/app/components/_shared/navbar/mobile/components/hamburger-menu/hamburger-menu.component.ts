import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

// ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mobile-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent implements OnInit {
  constructor(private store: Store<any>) {}

  isMobileMenuOpen?: any;
  @ViewChild(MenuComponent) child: any;

  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
    });
  }

  handleClick(): void {
    this.child.handleMenuClick();
  }
}
