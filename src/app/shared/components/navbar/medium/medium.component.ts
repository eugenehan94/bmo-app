import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css'],
})
export class MediumComponent {
  @Input() currentScreenSize?: string;
  @Input() innerNavbarOptions?: any;
}
