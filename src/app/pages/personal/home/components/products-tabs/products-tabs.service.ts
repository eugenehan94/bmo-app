import { Injectable } from '@angular/core';
import { TabsType } from 'src/app/core/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import tabs from 'src/app/mock-data/personal/home/products-tabs';
import { retry, catchError, throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsTabsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/products-tabs';
  // Mock could be used if http doesn't work
  mock: TabsType[] = tabs;

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

  getTabs(): Observable<TabsType[]> {
    return this.http
      .get<TabsType[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
}
