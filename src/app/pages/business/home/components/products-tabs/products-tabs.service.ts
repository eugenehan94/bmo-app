import { Injectable } from '@angular/core';
import { TabsType } from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsTabsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/business/home/products-tabs';

  getTabs() {
    return this.http.get<TabsType[]>(this.url);
  }
}
