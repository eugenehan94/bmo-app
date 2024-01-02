import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroBannerOptionsType } from 'src/app/interfaces';
import heroBannerOptions from 'src/app/mock-data/personal/home/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/hero';
  // Mock could be used if http doesn't work
  mock: HeroBannerOptionsType[] = heroBannerOptions;

  getHeroBannerOptions() {
    return this.http.get<HeroBannerOptionsType[]>(this.url);
  }
}
