import { Component } from '@angular/core';
import { FooterCaptionsType } from 'src/app/components/_shared/interfaces';
import { BreakpointObserver } from '@angular/cdk/layout';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-business-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class BusinessHomeComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<any>
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

    this.store.select('navbarReducer').subscribe((res) => {
      this.isMobileMenuOpen = res.isMobileMenuOpen;
      this.isMobileSignInMenuOpen = res.isMobileSignInMenuOpen;
    })
  }

  handleSkipNav(event: any, section: string): void {
    event.preventDefault();
    window.location.hash = '';
    window.location.hash = section;
  }
}
