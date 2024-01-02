import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
  
} from 'src/app/interfaces';
import { FooterCaptionsType,} from "src/app/interfaces"
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-business-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class BusinessFooterComponent implements OnInit {
  constructor(
    private businessFooterService: FooterService,
    private store: Store<any>
  ) {}
  footerCategoryLinks?: FooterCategoryLinksType[];
  aboutBmoData?: AboutBmoDataType[];
  footerCaptions?: FooterCaptionsType[];
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
    this.businessFooterService.getFooterCategoryLinks().subscribe((res) => {
      this.footerCategoryLinks = res;
    });
    this.businessFooterService.getAboutBmoData().subscribe((res) => {
      this.aboutBmoData = res;
    });
    this.businessFooterService.getFooterCaptions().subscribe((res) => {
      this.footerCaptions = res;
    });
  }
}
