import { Component, OnInit } from '@angular/core';

//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-error-content',
  templateUrl: './error-content.component.html',
  styleUrls: ['./error-content.component.css'],
})
export class ErrorContentComponent implements OnInit {
  constructor(private store: Store<any>) {}
  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }
}
