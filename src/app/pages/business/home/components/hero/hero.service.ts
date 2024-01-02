import { Injectable } from '@angular/core';
import { HeroBannerOptionsType } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/business/home/hero';

  getHeroBannerOptions() {
    return this.http.get<HeroBannerOptionsType[]>(this.url);
  }
}
