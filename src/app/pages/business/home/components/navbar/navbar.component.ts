import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
@Component({
  selector: 'app-business-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private navbarService: NavbarService) {}

  innerNavbarOptions?: any;

  ngOnInit(): void {
    this.innerNavbarOptions = this.navbarService.navigationOptions;
  }
}
