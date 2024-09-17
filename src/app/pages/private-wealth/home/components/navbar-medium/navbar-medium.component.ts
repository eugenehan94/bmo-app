import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar-medium',
  templateUrl: './navbar-medium.component.html',
  styleUrl: './navbar-medium.component.css',
})
export class NavbarMediumComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  originalPath?: string;
  @Input() isMobileMenuOpen?: boolean;
  @Output() isMobileMenuOpenChange = new EventEmitter<boolean>();
  @Input() isMobileSignInMenuOpen?: boolean;
  @Output() isMobileSignInMenuOpenChange = new EventEmitter<boolean>();
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
