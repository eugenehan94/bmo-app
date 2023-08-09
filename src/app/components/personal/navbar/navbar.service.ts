import { Injectable } from '@angular/core';
import {
  SiteOptionsType,
  NavigationOptionsType,
} from '../../_shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  siteOptions: SiteOptionsType[] = [
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

  navigationOptions: NavigationOptionsType[] = [
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
