import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar-large',
  templateUrl: './navbar-large.component.html',
  styleUrl: './navbar-large.component.css',
})
export class NavbarLargeComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  originalPath?: string;
  isSelectedSiteOpen?: boolean = false;
  isCountrySelectMenuOpen?: boolean = false;
  isLanguageSelectMenuOpen?: boolean = false;
  isSigninMenuOpen?: boolean = false;
  ngOnInit() {
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.originalPath = path;
  }
}
