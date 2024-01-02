import { Injectable } from '@angular/core';
import { CardContentType } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
import cardContent from 'src/app/mock-data/personal/home/where-to-being';
@Injectable({
  providedIn: 'root',
})
export class WhereToBeginService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/personal/home/where-to-begin';
  // Mock could be used if http doesn't work
  mock: CardContentType[] = cardContent;
  getCardContent() {
    return this.http.get<CardContentType[]>(this.url);
  }
}
