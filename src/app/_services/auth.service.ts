import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  verifyJwtExist() {
    return this.http.post(
      'http://localhost:5000/api/v1/sign-in/verifyCookieExist',
      {},
      {
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
      }
    );
  }
}
