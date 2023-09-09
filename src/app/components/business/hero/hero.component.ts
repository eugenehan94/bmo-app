import { Component, Input } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroBannerOptionsType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-business-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class BusinessHeroComponent {
  constructor(private service: HeroService) {}
  // Randomly select one of the objects from the array of objects heroBannerOptions
  heroBannerOptions: HeroBannerOptionsType[] = this.service.heroBannerOptions;
  randomIndex: number = Math.floor(
    Math.random() * this.heroBannerOptions.length
  );
  selectedBanner: HeroBannerOptionsType =
    this.heroBannerOptions[this.randomIndex];
  @Input() currentScreenSize?: string;
}
