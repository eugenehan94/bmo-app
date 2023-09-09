import { Component, ViewEncapsulation, Input } from '@angular/core';
@Component({
  selector: 'app-hero-layout',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular
  encapsulation: ViewEncapsulation.None,
})
export class SharedHeroComponent {
  @Input() selectedBanner: any;
  @Input() currentScreenSize?: string;

  constructor() {}
}
