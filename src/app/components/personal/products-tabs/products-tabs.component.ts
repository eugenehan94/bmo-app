import { Component } from '@angular/core';
import { ProductsTabsService } from './products-tabs.service';

@Component({
  selector: 'app-personal-products-tabs',
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.css'],
})
export class ProductsTabsComponent {
  constructor(private productsTabService: ProductsTabsService) {}

  tabContents = this.productsTabService.tabs;
}
