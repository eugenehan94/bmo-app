import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service';
@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.css',
})
export class NavbarMobileComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService
  ) {}
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();
  @ViewChild('signInBtn') signInBtn?: any;
  @ViewChildren('signInListItem') signInListItem?: QueryList<ElementRef>;
  @ViewChild('hamburgerMenuBtn') hamburgerMenuBtn?: any;
  originalPath?: string;
  signInMenuOptions: any = this.navbarService.signInMenuOptions;
  focusOnLastSignInMenuOption?: boolean;
  ngOnInit() {
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.originalPath = path;
  }

  toggleSignInMenu() {
    this.isMobileMenuOpenChange.emit(false);
    this.isMobileSignInMenuOpenChange.emit(!this.isMobileSignInMenuOpen);
  }

  toggleHamburgerMenu() {
    this.isMobileSignInMenuOpenChange.emit(false);
    this.isMobileMenuOpenChange.emit(!this.isMobileMenuOpen);
  }

  onKeyDown(event: KeyboardEvent) {
    // Prevents tab navigation from leaving button that toggles the menu if its opened
    if (event.key === 'Tab' && event.shiftKey && this.isMobileSignInMenuOpen) {
      event.preventDefault();
    }
    // If sign in menu is not open, tab navigation will go the next menu button
    if (
      event.key === 'Tab' &&
      !event.shiftKey &&
      !this.isMobileSignInMenuOpen
    ) {
      event.preventDefault();
      this.hamburgerMenuBtn.focus();
    }

    if (event.key === 'Tab' && !event.shiftKey) {
      if (this.focusOnLastSignInMenuOption) {
        event.preventDefault();
        this.signInBtn.focus();
        this.focusOnLastSignInMenuOption = false;
      }
    }
  }
  focusSignInItem(last: any) {
    this.focusOnLastSignInMenuOption = last;
  }
}
