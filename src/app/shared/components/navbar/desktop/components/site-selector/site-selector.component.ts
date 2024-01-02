import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { SiteOptionsType } from 'src/app/interfaces';
import { DesktopService } from 'src/app/shared/components/navbar/desktop/desktop.service';
@Component({
  selector: 'app-desktop-site-selector',
  templateUrl: './site-selector.component.html',
  styleUrls: ['./site-selector.component.css'],
})
export class SiteSelectorComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private desktopService: DesktopService,
    private activatedRoute: ActivatedRoute
  ) {}
  isSelectedSiteOpen?: boolean;
  selectedSiteOption?: string;
  siteOptions: SiteOptionsType[] = this.navbarService.siteOptions;
  ariaActiveDescendent?: string = '';

  ngOnInit(): void {
    this.desktopService.isSelectedSiteOpen.subscribe((isOpen: boolean) => {
      this.isSelectedSiteOpen = isOpen;
    });

    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    let pathCapital = `${path?.charAt(0).toUpperCase()}` + `${path?.slice(1)}`;
    this.selectedSiteOption = pathCapital;
  }

  handleSelectedSiteMenuClick(event: any): void {
    event.preventDefault();
    this.desktopService.setIsSelectedSiteOpen(!this.isSelectedSiteOpen);
  }

  optionOnFocus(i: number): void {
    this.ariaActiveDescendent = 'site-selector_' + i;
  }
}
