import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MediumMenuComponent {
  constructor() {}
  // @TODO: Get the mobile menu state from store and remove the parent-child input
  @Input() isMediumMenuOpen?: boolean;

  backToMenuBtn(): void {
    document.getElementById('medium-menu-btn')?.focus();
  }
}
