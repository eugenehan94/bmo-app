import { Component } from '@angular/core';
import { FooterCaptionsType } from 'src/app/components/_shared/interfaces';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BusinessHomeService } from './home.service';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-business-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class BusinessHomeComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    private businessHomeService: BusinessHomeService
  ) {}

  currentScreenSize?: string;
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;
  footerCaptions?: FooterCaptionsType[];

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
          this.currentScreenSize = 'Small';
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 768px) and (max-width:1024px)'
          )
        ) {
          this.currentScreenSize = 'Medium';
        } else {
          this.currentScreenSize = 'Large';
        }
      });

    this.appService.isMobileSignInMenuOpen.subscribe((isOpen: any) => {
      this.isMobileSignInMenuOpen = isOpen;
    });
    this.appService.isMobileMenuOpen.subscribe((isOpen: boolean) => {
      this.isMobileMenuOpen = isOpen;
    });
    this.footerCaptions = this.businessHomeService.footerCaptions;
  }

  handleSkipNav(event: any, section: string): void {
    event.preventDefault();
    window.location.hash = '';
    window.location.hash = section;
  }
}
