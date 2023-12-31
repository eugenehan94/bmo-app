import { Component, Input, OnInit } from '@angular/core';
import { WhereToBeginService } from './where-to-begin.service';
import { CardContentType } from 'src/app/interfaces';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-business-where-to-begin',
  templateUrl: './where-to-begin.component.html',
  styleUrls: ['./where-to-begin.component.css'],
})
export class BusinessWhereToBeginComponent implements OnInit {
  constructor(
    private service: WhereToBeginService,
    private store: Store<any>
  ) {}
  title: string = "Not sure where to begin? We'll help you choose";
  cardDatas?: CardContentType[];
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.service.getCardContent().subscribe((res) => {
      this.cardDatas = res;
    });
  }
}
