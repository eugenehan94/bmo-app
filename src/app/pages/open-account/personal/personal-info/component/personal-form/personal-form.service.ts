import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PersonalFormService {
  constructor(private http: HttpClient) {}

  private createAccountLink =
    'http://localhost:5000/api/v1/open-account/create-account';

  createAccount(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(this.createAccountLink, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = `Error ${error.error.message}`;
    } else {
      // Server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
