import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  siteOptions = [
    {
      title: 'Personal',
    },
    { title: 'Business' },
    { title: 'Private Wealth' },
    { title: 'Commercial' },
    { title: 'Capital Markets' },
    { title: 'Global Asset Management' },
    { title: 'About BMO' },
  ];

  navigationOptions = [
    {
      title: 'Bank Accounts',
    },
    {
      title: 'Credit Cards',
    },
    {
      title: 'Mortgages',
    },
    {
      title: 'Loans',
    },
    {
      title: 'Investing',
    },
    {
      title: 'Insurance',
    },
    {
      title: 'Offers & Programs',
    },
  ];

  constructor() {}
}
