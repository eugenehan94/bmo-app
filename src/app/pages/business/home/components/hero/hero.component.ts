import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroBannerOptionsType } from 'src/app/interfaces/interfaces';

// ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-business-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class BusinessHeroComponent implements OnInit {
  constructor(private service: HeroService, private store: Store<any>) {}
  
  selectedBanner?: HeroBannerOptionsType;
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.service.getHeroBannerOptions().subscribe((res) => {
      // Randomly select one of the objects from the array of objects
      let randomIndex: number = Math.floor(Math.random() * res.length);
      this.selectedBanner = res[randomIndex];
    });
  }
}
