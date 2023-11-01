import { Component } from '@angular/core';
import { NavbarService } from 'src/app/components/_shared/navbar/navbar.service';
import {
  NavigationOptionsType,
} from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  constructor(private navbarService: NavbarService) {}
  navbarOptions: NavigationOptionsType[] = this.navbarService.navigationOptions;
}
