import { Component, OnInit, ViewChild, Input } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';
import {
  setIsMobileMenuOpen,
  setIsMobileSignInMenuOpen,
} from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-medium-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MediumMenuComponent implements OnInit {
  constructor(private store: Store<any>) {}
  @Input() innerNavbarOptions?: any;
  isMediumMenuOpen?: boolean;
  @ViewChild('MediumMenuContainer') mediumMenuContainer: any;
  ngOnInit(): void {
    this.store.select('navbarReducer').subscribe((res) => {
      this.isMediumMenuOpen = res.isMobileMenuOpen;
    });
  }

  handleMenuClick(): void {
    // Closes the mobile sign-in menu if it is open
    const mediumSignInMenu = document.querySelector(
      '.medium-signin-menu-container.open'
    );
    mediumSignInMenu?.classList.remove('open');
    this.store.dispatch(setIsMobileSignInMenuOpen({ isOpen: false }));

    const mediumMenu = this.mediumMenuContainer.nativeElement;
    mediumMenu.classList.add('open');
    if (this.isMediumMenuOpen) {
      mediumMenu.classList.add('closing');
      // @NOTE: Waits for closing animation to finish - then component restarts
      // to original CSS with display: none. Thus, animation and tab-able protected.
      mediumMenu.addEventListener(
        'animationend',
        () => {
          mediumMenu.classList.remove('closing');
          mediumMenu.classList.remove('open');
          this.store.dispatch(setIsMobileMenuOpen({ isOpen: false }));
        },
        { once: true }
      );
    } else {
      this.store.dispatch(setIsMobileMenuOpen({ isOpen: true }));
    }
  }

  backToMenuBtn(): void {
    document.getElementById('medium-menu-btn')?.focus();
  }
}
