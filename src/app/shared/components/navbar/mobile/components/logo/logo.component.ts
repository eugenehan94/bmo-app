import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  originalPath?: string;

  ngOnInit(): void {
   
    // Path was determined by comparing existing pages and finding 
    // this chain will give us our desired path. Didn't use subscribe to 
    // ActivateRoute because lazy loading page will not get the url
    let path = this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path
    this.originalPath = path;
  }
}
