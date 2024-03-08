import { Injectable } from '@angular/core';
import { FooterCategoryLinksType, AboutBmoDataType } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GettingStartedService {
  constructor(private http: HttpClient) {}
  private footerCategoryLinksUrl =
    'http://localhost:5000/api/v1/personal/home/footer/category-links';
  private aboutBmoDataUrl =
    'http://localhost:5000/api/v1/personal/home/footer/about-bmo';
  getFooterCategoryLinks() {
    return this.http.get<FooterCategoryLinksType[]>(
      this.footerCategoryLinksUrl
    );
  }
  getAboutBmoData() {
    return this.http.get<AboutBmoDataType[]>(this.aboutBmoDataUrl);
  }
}
