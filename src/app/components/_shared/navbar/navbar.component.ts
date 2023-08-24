import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() currentScreenSize?: string;
  @Output() isMobileSignInMenuOpenChanged = new EventEmitter<any>();

  isMobileSignInMenuOpenHandler(isOpen: boolean): void {
    this.isMobileSignInMenuOpenChanged.emit(isOpen)
  }
}
