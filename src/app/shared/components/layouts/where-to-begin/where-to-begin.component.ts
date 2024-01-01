import { Component, Input } from '@angular/core';
import { CardContentType } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-where-to-begin-layout',
  templateUrl: './where-to-begin.component.html',
  styleUrls: ['./where-to-begin.component.css'],
})
export class SharedWhereToBeginComponent {
  @Input() currentScreenSize?: string;
  @Input() title?: string;
  @Input() cardDatas?: CardContentType[];
}
