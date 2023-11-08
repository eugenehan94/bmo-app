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
  menuSelectedIndex?: number;
  innerMenuSelectedIndex?: number;

  ngOnInit(): void {
    this.navbarOptions = this.navbarService.navigationOptions;
    console.log('navbarOptions: ', this.navbarOptions);
    // NOTE: Get the original url of the specific page we are on without parameter - so we can reload
    this.activatedRoute.url.subscribe(([url]) => {
      const { path } = url;
      this.originalPath = path;
    });
  }

  handleMenuClick(i: number): void {
    if (this.menuSelectedIndex === undefined) {
      this.menuSelectedIndex = i;
    }

    if (
      this.menuSelectedIndex === i ||
      (this.menuSelectedIndex !== i && this.menuIsOpen === false)
    ) {
      this.menuIsOpen = !this.menuIsOpen;
    }

    if (this.menuIsOpen !== false) {
      // @TODO: do not call function when closing menu
      this.findFirstChildOccurrenceIndexOfInnerMenu(i);
    }

    this.menuSelectedIndex = i;
  }

  handleInnerMenuClick(j: number): void {
    if (this.innerMenuSelectedIndex === undefined) {
      this.innerMenuSelectedIndex = j;
    }
    this.innerMenuSelectedIndex = j;
  }

  // NOTE: Inner menu shows options from the first occurence of the children array
  findFirstChildOccurrenceIndexOfInnerMenu(i: number): void {
    let stop = false;
    this.navbarOptions[i].categories.find((x: any, index: number) => {
      if (x.children !== undefined && stop === false) {
        this.innerMenuSelectedIndex = index;
        stop = true;
      }
    });
  }
}
