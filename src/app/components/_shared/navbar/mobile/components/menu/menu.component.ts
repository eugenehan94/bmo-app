import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit,AfterViewInit {
  constructor(private appService: AppService) {}

  isMobileMenuOpen?: boolean;
  @ViewChild('menuContainer') container: any;
  ngOnInit(): void {
    this.appService.isMobileMenuOpen.subscribe((isOpen: boolean) => {
      this.isMobileMenuOpen = isOpen;
    });
  }
  ngAfterViewInit() {
    let height = this.container.nativeElement.offsetHeight;
  }
}
