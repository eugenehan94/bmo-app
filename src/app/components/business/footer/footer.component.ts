import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
  FooterCaptionsType,
} from 'src/app/components/_shared/interfaces';

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
  footerCategoryLinks: FooterCategoryLinksType[] =
    this.businessFooterService.footerCategoryLinks;
  aboutBmoData: AboutBmoDataType[] = this.businessFooterService.aboutBmoData;
  footerCaptions: FooterCaptionsType[] =
    this.businessFooterService.footerCaptions;
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
