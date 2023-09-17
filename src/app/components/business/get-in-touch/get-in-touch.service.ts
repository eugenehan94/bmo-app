import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetInTouchService {
  constructor() {}

  buttonsData: any = [
    {
      imageSrc: 'assets/svg/dollar-1-illustration.svg',
      imageAlt: 'Circle with dollar sign in the middle',
      title: 'Up to $250K',
      titleParagraph: 'in annual revenue',
    },
    {
      imageSrc: 'assets/svg/dollar-2-illustration.svg',
      imageAlt: 'Lots of coins',
      title: '$250K to $10M',
      titleParagraph: 'in annual revenue',
    },
    {
      imageSrc: 'assets/svg/money-bag-illustration.svg',
      imageAlt: 'Money bag',
      title: 'Over $10M',
      titleParagraph: 'in annual revenue',
    },
  ];
}
