import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MediumMenuComponent {
  constructor() {
  }
  @Input() isMediumMenuOpen?: boolean;
}
