import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavigationOptionsType } from 'src/app/core/interfaces';
import { retry, catchError, throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/navigation-options';

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error code: ${error.status} \nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getNavigationOptions(): Observable<NavigationOptionsType[]> {
    return this.http
      .get<NavigationOptionsType[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
}
