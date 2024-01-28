import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FooterContentOneType, FooterContentTwoType } from 'src/app/interfaces';
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private http: HttpClient) {}

  private url1 = 'http://localhost:5000/api/v1/sign-in/footer/content-one';
  private url2 = 'http://localhost:5000/api/v1/sign-in/footer/content-two';
  getFooterContentOne() {
    return this.http.get<FooterContentOneType[]>(this.url1);
  }

  getFooterContentTwo() {
    return this.http.get<FooterContentTwoType[]>(this.url2);
  }
}
