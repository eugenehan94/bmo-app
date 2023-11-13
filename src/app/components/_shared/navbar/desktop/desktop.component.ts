import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

//ngrx
import { Store } from '@ngrx/store';
import { setDesktopInnerNavIsOpen } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private store: Store<any>
  ) {}

  @Input() currentScreenSize?: string;
  @Input() innerNavbarOptions?: any;
  
  isSelectedSiteOpen?: boolean;
  isCountrySelectMenuOpen: boolean = false;
  isLanguageSelectMenuOpen: boolean = false;
  menuIsOpen?: boolean;

  ngOnInit(): void {
    this.store.select('desktopInnerNavigationReducer').subscribe((res) => {
      this.menuIsOpen = res.menuIsOpen;
    });
  }

  handleClick(): void {
    if (this.menuIsOpen === true) {
      this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
    }
  }
}
