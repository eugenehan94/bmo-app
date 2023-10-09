import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroBannerOptionsType } from 'src/app/components/_shared/interfaces';

// ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-business-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class BusinessHeroComponent implements OnInit {
  constructor(private service: HeroService, private store: Store<any>) {}
  // Randomly select one of the objects from the array of objects heroBannerOptions
  heroBannerOptions: HeroBannerOptionsType[] = this.service.heroBannerOptions;
  randomIndex: number = Math.floor(
    Math.random() * this.heroBannerOptions.length
  );
  selectedBanner: HeroBannerOptionsType =
    this.heroBannerOptions[this.randomIndex];
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
