import { Injectable } from '@angular/core';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
  FooterCaptionsType,
} from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private http: HttpClient) {}

  private footerCategoryLinksUrl =
    'http://localhost:5000/api/v1/business/home/footer/category-links';
  private aboutBmoDataUrl =
    'http://localhost:5000/api/v1/business/home/footer/about-bmo';
  private footerCaptionsUrl =
    'http://localhost:5000/api/v1/business/home/footer/captions';

  getFooterCategoryLinks() {
    return this.http.get<FooterCategoryLinksType[]>(
      this.footerCategoryLinksUrl
    );
  }
  getAboutBmoData() {
    return this.http.get<AboutBmoDataType[]>(this.aboutBmoDataUrl);
  }
  getFooterCaptions() {
    return this.http.get<FooterCaptionsType[]>(this.footerCaptionsUrl);
  }
}
