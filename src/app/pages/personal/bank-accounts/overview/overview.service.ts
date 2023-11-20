import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  constructor() {}

  bankAccountData: any = [
    {
      text: 'Get limited-time cash bonuses when you open a Performance or Premium Chequing Account online.',
    },
    {
      text: 'Only one monthly fee for all your household member accounts with the BMO Family Bundle',
    },
    {
      text: 'Special offers for students, seniors, newcomers to Canada and more.',
    },
  ];
}
