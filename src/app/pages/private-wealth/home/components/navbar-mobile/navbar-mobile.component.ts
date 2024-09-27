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
}
