import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-selector',
  templateUrl: './site-selector.component.html',
  styleUrl: './site-selector.component.css',
})
export class SiteSelectorComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  @Input() isSelectedSiteOpen?: boolean;
  @Output() isSelectedSiteOpenChange = new EventEmitter<boolean>();
  @Input() isCountrySelectMenuOpen?: boolean;
  @Output() isCountrySelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isLanguageSelectMenuOpen?: boolean;
  @Output() isLanguageSelectMenuOpenChange = new EventEmitter<boolean>();
  @Input() isSigninMenuOpen?: boolean;
  @Output() isSigninMenuOpenChange = new EventEmitter<boolean>();
  selectedSiteOption?: string;
  ariaActiveDescendent?: string = '';

  ngOnInit(): void {
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    let pathCapital = `${path?.charAt(0).toUpperCase()}` + `${path?.slice(1)}`;
    this.selectedSiteOption = pathCapital;
  }

  handleSelectedSiteMenuClick(event: any): void {
    event.preventDefault();
    this.isSelectedSiteOpenChange.emit(!this.isSelectedSiteOpen);
    if (this.isCountrySelectMenuOpen) {
      this.isCountrySelectMenuOpenChange.emit(false);
    }
    if (this.isLanguageSelectMenuOpen) {
      this.isLanguageSelectMenuOpenChange.emit(false);
    }
    if (this.isSigninMenuOpen) {
      this.isSigninMenuOpenChange.emit(false);
    }
  }

  optionOnFocus(i: number): void {
    this.ariaActiveDescendent = 'site-selector_' + i;
  }
  toggleSiteSelector(): any {
    this.isSelectedSiteOpenChange.emit(!this.isSelectedSiteOpen);
  }
}
