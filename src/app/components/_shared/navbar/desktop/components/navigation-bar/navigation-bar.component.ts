import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import { NavigationOptionsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private activatedRoute: ActivatedRoute
  ) {}
  // @TODO: add typescript and see why it doesn't work when using nested ngFor loop
  navbarOptions?: any;
  originalPath?: string;
  menuIsOpen?: boolean;

  ngOnInit(): void {
    this.navbarOptions = this.navbarService.navigationOptions;
    console.log('navbarOptions: ', this.navbarOptions);
    // NOTE: Get the original url of the specific page we are on without parameter - so we can reload
    this.activatedRoute.url.subscribe(([url]) => {
      const { path } = url;
      this.originalPath = path;
    });
  }

  handleMenuClick():void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
