import { Component, Input } from '@angular/core';
import { TabsType } from 'src/app/interfaces';
@Component({
  selector: 'app-products-tab-layout',
  templateUrl: './products-tab.component.html',
  styleUrls: ['./products-tab.component.css'],
})
export class SharedProductsTabComponent {
  constructor() {}
  @Input() title?: string;
  @Input() subTitle?: string;
  @Input() tabContents?: TabsType[];
  @Input() currentScreenSize?: string;
}
