import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        // Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        console.log('HOME breakpoints: ', breakpoints);

        if (breakpoints[Breakpoints.XSmall]) {
          console.log('screens matches XSmall');
          this.currentScreenSize = 'XSmall';
        } else if (breakpoints[Breakpoints.Small]) {
          console.log('screens matches Small');
          this.currentScreenSize = 'Small';
        } else if (breakpoints[Breakpoints.Medium]) {
          console.log('screens matches Medium');
          this.currentScreenSize = 'Medium';
        } 
        else {
          console.log('screens matches Large');
          this.currentScreenSize = 'Large';
        }
      });
  }
}
