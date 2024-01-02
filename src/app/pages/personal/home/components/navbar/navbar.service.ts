import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationOptionsType } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/navigation-options';

  getNavigationOptions() {
    return this.http.get<NavigationOptionsType[]>(this.url);
  }
}
