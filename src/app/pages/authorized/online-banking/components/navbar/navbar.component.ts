import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//ngrx
import { Store } from '@ngrx/store';
// Services
import { StorageService } from 'src/app/_services/storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router,
    private storageService: StorageService,
    private http: HttpClient
  ) {}

  currentScreenSize?: string;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

  handleSignOut() {
    this.logoutUser();
  }

  logoutUser() {
    return this.http
      .post(
        'http://localhost:5000/api/v1/sign-in/logout',
        {},
        {
          headers: { 'content-type': 'application/json' },
          withCredentials: true,
        }
      )
      .subscribe({
        next: (res) => {
          this.storageService.clean();
          this.router.navigate(['login']);
        },
      });
  }
}
