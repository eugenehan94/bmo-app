import { Injectable } from '@angular/core';
import {
  ButtonsDataType,
  ButtonsDisplayContentsType,
} from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetInTouchService {
  constructor(private http: HttpClient) {}

  private getButtonDataUrl =
    'http://localhost:5000/api/v1/business/home/get-in-touch-buttons-data';

  private getButtonDisplayContentsUrl =
    'http://localhost:5000/api/v1/business/home/get-in-touch-buttons-display-content';

  getButtonData() {
    return this.http.get<ButtonsDataType[]>(this.getButtonDataUrl);
  }

  getButtonDisplayContents() {
    return this.http.get<ButtonsDisplayContentsType[]>(
      this.getButtonDisplayContentsUrl
    );
  }
}
