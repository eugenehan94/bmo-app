import { Component } from '@angular/core';
import { WhereToBeginService } from './where-to-begin.service';

interface cardContentType {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  linkTitle: string;
  linkSrc: string;
  linkAriaLabel: string
}


@Component({
  selector: 'app-personal-where-to-begin',
  templateUrl: './where-to-begin.component.html',
  styleUrls: ['./where-to-begin.component.css'],
})
export class WhereToBeginComponent {
  title: string = 'Not sure where to begin? We’ll help you choose';
  cardDatas: cardContentType[] = this.service.cardContent;
  constructor(private service: WhereToBeginService){}
}
