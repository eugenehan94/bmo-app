import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HeroBannerOptionsType } from 'src/app/core/interfaces';
import heroBannerOptions from 'src/app/mock-data/personal/home/hero';
import { retry, catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/hero';
  // Mock could be used if http doesn't work
  mock: HeroBannerOptionsType[] = heroBannerOptions;

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

  getHeroBannerOptions(): Observable<HeroBannerOptionsType[]> {
    return this.http.get<HeroBannerOptionsType[]>(this.url).pipe(
      retry(2), // Retry the request up to 2 times before failing
      catchError(this.handleError)
    );
  }
}
