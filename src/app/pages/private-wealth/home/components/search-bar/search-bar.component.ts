import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  constructor() {}
  isSearchBarOpen: boolean = false;

  handleSearchBarClick(e: Event, input: boolean): void {
    e.stopPropagation();
    this.isSearchBarOpen = input;
  }
}
