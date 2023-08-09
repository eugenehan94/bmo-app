import { Component, ViewEncapsulation, Input } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroBannerOptionsType } from '../../_shared/interfaces';

@Component({
  selector: 'app-personal-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent {
  // Randomly select one of the objects from the array of objects heroBannerOptions
  heroBannerOptions: HeroBannerOptionsType[] = this.service.heroBannerOptions;
  randomIndex: number = Math.floor(
    Math.random() * this.heroBannerOptions.length
  );
  selectedBanner: HeroBannerOptionsType =
    this.heroBannerOptions[this.randomIndex];

  @Input() currentScreenSize?: string;
  
  constructor(private service: HeroService) {}
}
