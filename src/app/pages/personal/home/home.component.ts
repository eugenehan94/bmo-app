// Set own breakpoints: https://stackoverflow.com/questions/73561379/customize-angular-layout-breakpoints
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from 'src/app/app.service';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // https://blog.angular-university.io/angular-responsive-design/
  currentScreenSize?: string;
  isMobileSignInMenuOpen?: boolean;
  isMobileMenuOpen?: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    private store: Store<any>
  ) {}

  ngOnInit() {
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
    this.store.select('isMobileMenuOpen').subscribe((res) => {
      this.isMobileMenuOpen = res;
    });
  }

  handleSkipNav(event: any, section: string): void {
    event.preventDefault();
    window.location.hash = '';
    window.location.hash = section;
  }
}
