import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-search-bar',
  templateUrl: './menu-search-bar.component.html',
  styleUrls: ['./menu-search-bar.component.css'],
})
export class MenuSearchBarComponent {
  isMobileMenuSearchSelected: boolean = false;
  handleMobileMenuSearchClick(input: boolean): void {
    this.isMobileMenuSearchSelected = input;
  }
}
