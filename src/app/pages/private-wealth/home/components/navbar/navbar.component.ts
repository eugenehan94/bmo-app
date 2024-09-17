import { Component, OnInit, DestroyRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private destroyRef: DestroyRef,
    private activatedRoute: ActivatedRoute
  ) {}

  currentScreenSize?: string;
  isMobileMenuOpen?: boolean = false;
  isMobileSignInMenuOpen?: boolean = false;
  originalPath?: string;
  ngOnInit() {
    this.breakpointObserver
      .observe([
        '(max-width: 767.99px)',
        '(min-width: 768px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints['(max-width: 767.99px)']) {
            this.currentScreenSize = 'Small';
          }
          if (
            result.breakpoints['(min-width: 768px) and (max-width: 1023.99px)']
          ) {
            this.currentScreenSize = 'Medium';
          }
          if (result.breakpoints['(min-width: 1024px)']) {
            this.currentScreenSize = 'Large';
          }
        }
      });
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.originalPath = path;
  }
}
