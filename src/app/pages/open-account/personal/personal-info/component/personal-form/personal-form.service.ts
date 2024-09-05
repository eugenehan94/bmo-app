import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonalFormService {
  constructor(private http: HttpClient) {}

  private createAccountLink =
    'http://localhost:5000/api/v1/open-account/create-account';

  createAccount(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(this.createAccountLink, data, httpOptions);
  }
}
