import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GettingStartedService } from './getting-started.service';
import { FooterCategoryLinksType, AboutBmoDataType } from 'src/app/interfaces';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css'],
})
export class GettingStartedComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>,
    private service: GettingStartedService
  ) {}

  currentScreenSize?: string;
  footerCategoryLinks?: FooterCategoryLinksType[];
  aboutBmoData?: AboutBmoDataType[];
  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 767.99px)',
        '(min-width: 768px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (this.breakpointObserver.isMatched('(max-width: 767.99px)')) {
          this.store.dispatch(setScreenSize({ screenSize: 'Small' }));
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 768px) and (max-width:1024px)'
          )
        ) {
          this.store.dispatch(setScreenSize({ screenSize: 'Medium' }));
        } else {
          this.store.dispatch(setScreenSize({ screenSize: 'Large' }));
        }
      });
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
