import { Component, Input } from '@angular/core';
import { ProductsTabsService } from './products-tabs.service';
import { TabsType } from 'src/app/components/_shared/interfaces';

@Component({
  selector: 'app-business-products-tabs',
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.css'],
})
export class BusinessProductsTabsComponent {
  constructor(private productsTabService: ProductsTabsService) {}

  title: string = 'BMO Business Banking';
  subTitle: string = 'What can we help you find today?';
  tabContents: TabsType[] = this.productsTabService.tabs;
  @Input() currentScreenSize?: string;
}
