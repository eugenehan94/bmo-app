import { Component, OnInit } from '@angular/core';
import { ProductsTabsService } from './products-tabs.service';
import { TabsType } from 'src/app/interfaces/interfaces';

// ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-business-products-tabs',
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.css'],
})
export class BusinessProductsTabsComponent implements OnInit {
  constructor(
    private productsTabService: ProductsTabsService,
    private store: Store<any>
  ) {}

  title: string = 'BMO Business Banking';
  subTitle: string = 'What can we help you find today?';
  tabContents?: TabsType[];
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.productsTabService.getTabs().subscribe((res) => {
      this.tabContents = res;
    });
  }
}
