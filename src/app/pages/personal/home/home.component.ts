// Set own breakpoints: https://stackoverflow.com/questions/73561379/customize-angular-layout-breakpoints
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

//ngrx
import { Store } from '@ngrx/store';
import {
  setScreenSize,
  setDesktopInnerNavIsOpen,
} from 'src/app/store/app/actions/app.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // https://blog.angular-university.io/angular-responsive-design/
  currentScreenSize?: string;
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;
  isDesktopInnerMenuOpen?: boolean;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        '(max-width: 767.99px)',
        '(min-width: 768px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (this.breakpointObserver.isMatched('(max-width: 767.99px)')) {
          this.store.dispatch(setScreenSize({ screenSize: 'Small' }));
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 768px) and (max-width:1024px)'
          )
        ) {
          this.store.dispatch(setScreenSize({ screenSize: 'Medium' }));
        } else {
          this.store.dispatch(setScreenSize({ screenSize: 'Large' }));
        }
      });

    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });

    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
      this.isMobileSignInMenuOpen = res.isMobileSignInMenuOpen;
    });

    this.store.select('desktopInnerNavigationReducer').subscribe((res) => {
      this.isDesktopInnerMenuOpen = res.menuIsOpen;
    });
  }

  handleSkipNav(event: any, section: string): void {
    event.preventDefault();
    window.location.hash = '';
    window.location.hash = section;
  }

  handleOverlayClick(): void {
    this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
  }
}
