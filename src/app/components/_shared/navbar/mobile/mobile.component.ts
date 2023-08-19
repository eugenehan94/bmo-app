import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  @Input() currentScreenSize?: string;

  isMobileMenuOpen: boolean = false;
  isMobileSignInMenuOpen: boolean = false;

}
