import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

//ngrx
import {Store} from "@ngrx/store";
import {setIsMobileMenuOpen} from "src/app/store/app/actions/app.actions";

@Component({
  selector: 'app-medium-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class MediumHamburgerMenuComponent implements OnInit {
  constructor(private appService: AppService, private store: Store<any>) {}
  isMediumMenuOpen?: any;

  ngOnInit(): void {
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMediumMenuOpen = res;
    })
  }

  handleMenuClick(): void {
    this.appService.setIsMobileSignInMenuOpen(false);
    // this.appService.setIsMobileMenuOpen(!this.isMediumMenuOpen);

    this.store.dispatch(setIsMobileMenuOpen({isOpen: !this.isMediumMenuOpen}))
  }
}
