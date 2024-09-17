import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.css',
})
export class NavbarMobileComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();
  originalPath?: string;
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
}
