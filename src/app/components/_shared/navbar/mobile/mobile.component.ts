import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  constructor() {}
  @Input() currentScreenSize?: string;
}
