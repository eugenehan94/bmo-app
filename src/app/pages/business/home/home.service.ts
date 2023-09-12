import { Injectable } from '@angular/core';
import { FooterCaptionsType } from 'src/app/components/_shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class BusinessHomeService {
  constructor() {}

  footerCaptions: FooterCaptionsType[] = [
    {
      caption:
        'The Western Union name, logo and related Trademarks and Service Marks are owned by Western Union Holdings Inc., and are used with permission.',
    },
    {
      caption:
        'Interac e-Transfer is a registered trademark of Interac Inc. Used under license.',
    },
    {
      caption:
        '®†Trademarks of AM Royalties Limited Partnership used under license by AIR MILES Loyalty Inc. and Bank of Montreal.',
    },
    {
      caption:
        'Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated. Used under license.',
    },
    {
      caption:
        'Trademark of Visa International Service Association and used under license.',
    },
  ];
}
