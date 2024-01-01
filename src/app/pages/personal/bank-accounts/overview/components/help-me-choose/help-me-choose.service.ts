import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpMeChooseService {
  constructor() {}

  firstOptionsList: any = [
    {
      id: 1,
      choice: 'A lot! I use my chequing account almost every day.',
    },
    {
      id: 2,
      choice: 'Occasionally. I use my chequing account a few times per week.',
    },
    {
      id: 3,
      choice: 'Not often. I don’t use my chequing account very frequently.',
    },
  ];
}
