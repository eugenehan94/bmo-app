import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-greeting',
  templateUrl: './user-greeting.component.html',
  styleUrls: ['./user-greeting.component.css'],
})
export class UserGreetingComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private storageService: StorageService
  ) {}
  currentScreenSize?: string;
  user?: any;
  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
      this.user = this.storageService.getUser().user;
    });
  }
}
