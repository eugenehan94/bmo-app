// Set own breakpoints: https://stackoverflow.com/questions/73561379/customize-angular-layout-breakpoints
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // https://blog.angular-university.io/angular-responsive-design/
  currentScreenSize?: string;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        '(max-width: 767.99px)',
        '(min-width: 768px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        console.log('HOME breakpoints: ', breakpoints);

        if (this.breakpointObserver.isMatched('(max-width: 767.99px)')) {
          console.log('screens matches Small');
          this.currentScreenSize = 'Small';
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 768px) and (max-width:1024px)'
          )
        ) {
          console.log('screens matches Medium');
          this.currentScreenSize = 'Medium';
        } else {
          console.log('screens matches Large');
          this.currentScreenSize = 'Large';
        }
      });
  }
}
