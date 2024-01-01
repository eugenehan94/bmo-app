import { Injectable } from '@angular/core';
import { CardContentType } from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WhereToBeginService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5000/api/v1/business/home/where-to-begin';

  getCardContent() {
    return this.http.get<CardContentType[]>(this.url);
  }

}
