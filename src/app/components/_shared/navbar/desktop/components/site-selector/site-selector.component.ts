import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { SiteOptionsType } from 'src/app/components/_shared/interfaces';
import { DesktopService } from 'src/app/components/_shared/navbar/desktop/desktop.service';
@Component({
  selector: 'app-desktop-site-selector',
  templateUrl: './site-selector.component.html',
  styleUrls: ['./site-selector.component.css'],
})
export class SiteSelectorComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private desktopService: DesktopService
  ) {}
  isSelectedSiteOpen?: boolean;
  selectedSiteOption: string = 'Personal';
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  ariaActiveDescendent?: string;

  ngOnInit(): void {
    this.desktopService.isSelectedSiteOpen.subscribe((isOpen: boolean) => {
      this.isSelectedSiteOpen = isOpen;
    });
  }

  handleSelectedSiteMenuClick(event:any): void {
    event.preventDefault();
    this.desktopService.setIsSelectedSiteOpen(!this.isSelectedSiteOpen);
  }

  optionOnFocus(i:number):void {
    this.ariaActiveDescendent = 'site-selector_' + i;
  }
}
