import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { NavigationOptionsType } from 'src/app/interfaces';

@Component({
  selector: 'app-personal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private navbarService: NavbarService) {}

  innerNavbarOptions?: NavigationOptionsType[];

  ngOnInit(): void {
    this.navbarService.getNavigationOptions().subscribe((res)=> {
      this.innerNavbarOptions = res;
    })
  }
}
