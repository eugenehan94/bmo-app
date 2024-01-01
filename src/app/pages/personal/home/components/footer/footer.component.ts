import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
} from 'src/app/interfaces/interfaces';

//ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-personal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class PersonalFooterComponent implements OnInit {
  constructor(private service: FooterService, private store: Store<any>) {}
  footerCategoryLinks?: FooterCategoryLinksType[];
  aboutBmoData?: AboutBmoDataType[];
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.service.getFooterCategoryLinks().subscribe((res) => {
      this.footerCategoryLinks = res;
    });
    this.service.getAboutBmoData().subscribe((res) => {
      this.aboutBmoData = res;
    });
  }
}
