import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  isSearchBarOpen: boolean = false;

  handleSearchBarClick(e: Event, input: boolean): void {
    e.stopPropagation();
    this.isSearchBarOpen = input;
  }
}
