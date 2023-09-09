import { Component, Input } from '@angular/core';
import { ProductsTabsService } from './products-tabs.service';
import { TabsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-personal-products-tabs',
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.css'],
})
export class ProductsTabsComponent {
  constructor(private productsTabService: ProductsTabsService) {}
  title: string = 'BMO Personal Banking';
  subTitle: string = 'What can we help you find today?';
  tabContents: TabsType[] = this.productsTabService.tabs;
  @Input() currentScreenSize?: string;
}
