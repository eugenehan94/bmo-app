import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { NavigationOptionsType } from 'src/app/interfaces';

//ngrx
import { Store } from '@ngrx/store';
import { setDesktopInnerNavIsOpen } from 'src/app/store/app/actions/app.actions';

@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}
  // @TODO: add typescript and see why it doesn't work when using nested ngFor loop
  @Input() navbarOptions?: any;
  originalPath?: string;
  menuIsOpen?: boolean;
  menuSelectedIndex?: number;
  innerMenuSelectedIndex?: number;

  ngOnInit(): void {
    // this.navbarOptions = this.navbarService.navigationOptions;
    this.store.select('desktopInnerNavigationReducer').subscribe((res) => {
      this.menuIsOpen = res.menuIsOpen;
    });
    // Get the original url of the specific page we are on without parameter - 
    // so we can reload
    // Path was determined by comparing existing pages and finding
    // this chain will give us our desired path. Didn't use subscribe to
    // ActivateRoute because lazy loading page will not get the url
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.originalPath = path;
    
  }

  handleContainerClick(event: any): void {
    const containsClass = event.target.classList.contains(
      'desktop-navigation-bar-container'
    );
    if (this.menuIsOpen === true && containsClass) {
      this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
    }
  }

  handleMenuClick(i: number): void {
    if (this.menuSelectedIndex === undefined) {
      this.menuSelectedIndex = i;
    }

    if (
      this.menuSelectedIndex === i ||
      (this.menuSelectedIndex !== i && this.menuIsOpen === false)
    ) {
      this.store.dispatch(
        setDesktopInnerNavIsOpen({ menuIsOpen: !this.menuIsOpen })
      );
    }

    if (this.menuIsOpen !== false) {
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

  // When tab to move out of last navbar option - it should close the innerMenu
  // if it is still open
  handleMenuLastOption(outerLast: boolean, i: number): void {
    if (outerLast && i !== this.menuSelectedIndex) {
      this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
    }
  }

  // When at last option on innerMenu and last navbar option - next tab click should
  // continue normally and close the innerMenu of the navbar if it is open.
  handleInnerMenuLastOption(outerLast: boolean, innerLast: boolean): void {
    if (outerLast === true && innerLast === true) {
      this.store.dispatch(setDesktopInnerNavIsOpen({ menuIsOpen: false }));
    }
  }

  // Inner menu shows the first occurence of the children array
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
