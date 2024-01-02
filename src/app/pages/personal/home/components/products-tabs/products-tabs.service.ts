import { Injectable } from '@angular/core';
import { TabsType } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
import tabs from 'src/app/mock-data/personal/home/products-tabs';

@Injectable({
  providedIn: 'root',
})
export class ProductsTabsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/products-tabs';
  // Mock could be used if http doesn't work
  mock: TabsType[] = tabs;

  getTabs() {
    return this.http.get<TabsType[]>(this.url);
  }
}
