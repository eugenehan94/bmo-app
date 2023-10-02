import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private store: Store<any>) {}

  isMobileMenuOpen?: boolean;
  ngOnInit(): void {
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMobileMenuOpen = res;
    });
  }
}
