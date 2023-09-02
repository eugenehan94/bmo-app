import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { NavbarService } from '../../../navbar.service';
@Component({
  selector: 'app-mobile-menu-inner-menu',
  templateUrl: './menu-inner-menu.component.html',
  styleUrls: ['./menu-inner-menu.component.css'],
})
export class MenuInnerMenuComponent implements AfterViewInit {
  constructor(private navbarService: NavbarService) {}
  navigationOptions: any = this.navbarService.navigationOptions;
  selectedParentIndex?: number;
  selectedChildIndex?: number;
  @ViewChildren('innerMenuParent') menuParentContainer?: any;
  @ViewChildren('innerParentChevron') menuParentChevron?: any;
  @ViewChildren('innerMenuParentChild') menuParentChildren?: any;
  @ViewChildren('innerMenuParentChildChevron') menuParentChildChevron: any;
  ngAfterViewInit(): void {}
  handleCategoryClick(i: number): void {
    const menuOptions = this.menuParentContainer._results;

    menuOptions.forEach(() => {
      if (i === this.selectedParentIndex) {
        document
          .getElementById(`${'inner-menu-parent' + i}`)
          ?.classList.toggle('open');
        document
          .getElementById(`${'inner-menu-parent-chevron' + i}`)
          ?.classList.toggle('open');
      } else if (i !== this.selectedParentIndex) {
        document
          .getElementById(`${'inner-menu-parent' + i}`)
          ?.classList.toggle('open');
        document
          .getElementById(`${'inner-menu-parent' + this.selectedParentIndex}`)
          ?.classList.remove('open');
        document
          .getElementById(`${'inner-menu-parent-chevron' + i}`)
          ?.classList.toggle('open');
        document
          .getElementById(
            `${'inner-menu-parent-chevron' + this.selectedParentIndex}`
          )
          ?.classList.remove('open');
        this.selectedParentIndex = i;
      }
    });
  }

  handleChildrenClicked(i: number, j: number): void {
    const children = this.menuParentChildren._results;
    children.forEach(() => {
      if (j === this.selectedChildIndex) {
        document
          .getElementById(`inner-menu-parent${i}child${j}`)
          ?.classList.toggle('open');
        document
          .getElementById(`inner-menu-parent${i}child${j}chevron`)
          ?.classList.toggle('open');
      } else if (j !== this.selectedChildIndex) {
        document
          .getElementById(`inner-menu-parent${i}child${j}`)
          ?.classList.toggle('open');
        document
          .getElementById(
            `inner-menu-parent${i}child${this.selectedChildIndex}`
          )
          ?.classList.remove('open');
        document
          .getElementById(`inner-menu-parent${i}child${j}chevron`)
          ?.classList.toggle('open');
        document
          .getElementById(
            `inner-menu-parent${i}child${this.selectedChildIndex}chevron`
          )
          ?.classList.remove('open');
        this.selectedChildIndex = j;
      }
    });
  }
}
