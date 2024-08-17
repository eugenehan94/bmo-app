import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public checkHttpOnlyCookieExist() {
    return this.http.get(
      'http://localhost:5000/api/v1/sign-in/verifyCookieExistV2',
      {
        observe: 'response',
        withCredentials: true,
      }
    );
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    this.checkHttpOnlyCookieExist().subscribe();
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

  public update(value: any, sessionName: any) {
    let prevData = JSON.parse(sessionStorage.getItem(sessionName)!);
    Object.keys(value).forEach(function (val, key) {
      prevData[val] = value[val];
    });
    sessionStorage.setItem(sessionName, JSON.stringify(prevData));
  }
}
