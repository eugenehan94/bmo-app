import {
  Component,
  AfterViewInit,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import { NavbarService } from '../../../navbar.service';
@Component({
  selector: 'app-mobile-menu-inner-menu',
  templateUrl: './menu-inner-menu.component.html',
  styleUrls: ['./menu-inner-menu.component.css'],
})
export class MenuInnerMenuComponent implements AfterViewInit {
  constructor(private navbarService: NavbarService) {}
  navigationOptions: any = this.navbarService.navigationOptions;
  @ViewChildren('tester') testing?: any;
  ngAfterViewInit(): void {
    console.log('viewChild: ', this.testing);
  }
  handleCategoryClick(i: number): void {
    // const categoryContainer = document.querySelectorAll(
    //   '.mobile-menu-btn-navigation-categories-container'
    // );
    // categoryContainer[i].classList.toggle('open');
    this.testing._results[i].nativeElement.classList.toggle('open');
    console.log('TEST: ', this.testing._results[i]);
  }

  testClick(event: any, i: number, j: number): void {
    console.log(' i and j: ', i, j);
    const childrenDropdownContainer = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-child-container'
    );
    const chevron = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-chevron'
    );

    const childrenTextOfDropdown = document.querySelectorAll(
      '.mobile-menu-btn-navigation-categories-dropdown-with-children'
    );
    childrenDropdownContainer[i].classList.toggle('open');
    chevron[i].classList.toggle('open');
    childrenTextOfDropdown[i].classList.toggle('open');
  }
}
