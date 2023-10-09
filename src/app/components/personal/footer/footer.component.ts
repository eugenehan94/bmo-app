import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
} from 'src/app/components/_shared/interfaces';

//ngrx
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-personal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class PersonalFooterComponent implements OnInit {
  constructor(private service: FooterService, private store: Store<any>) {}
  footerCategoryLinks: FooterCategoryLinksType[] =
    this.service.footerCategoryLinks;
  aboutBmoData: AboutBmoDataType[] = this.service.aboutBmoData;
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
