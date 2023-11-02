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
    this.activatedRoute.url.subscribe(([url]) => {
      const { path } = url;
      this.originalPath = path;
    });
  }
}
