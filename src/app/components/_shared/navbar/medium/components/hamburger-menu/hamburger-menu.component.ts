import { Component, OnInit, ViewChild } from '@angular/core';
import { MediumMenuComponent } from '../menu/menu.component';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-medium-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class MediumHamburgerMenuComponent implements OnInit {
  constructor(private store: Store<any>) {}
  isMediumMenuOpen?: any;
  @ViewChild(MediumMenuComponent) child: any;
  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMediumMenuOpen = res.isMobileMenuOpen;
    });
  }

  handleMenuClick(): void {
    this.child.handleMenuClick();
  }
}
