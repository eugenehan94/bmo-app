import { Component, Input } from '@angular/core';
import { WhereToBeginService } from './where-to-begin.service';
import { CardContentType } from 'src/app/components/_shared/interfaces';
@Component({
  selector: 'app-business-where-to-begin',
  templateUrl: './where-to-begin.component.html',
  styleUrls: ['./where-to-begin.component.css'],
})
export class BusinessWhereToBeginComponent {
  constructor(private service: WhereToBeginService) {}
  title: string = "Not sure where to begin? We'll help you choose";
  cardDatas: CardContentType[] = this.service.cardContent;
  @Input() currentScreenSize?: string;
}
