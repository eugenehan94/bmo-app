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
    {
      title: 'Business',
      linkHref:
        'https://www.bmo.com/en-ca/main/business/?icid=tl-FEAT2953BRND4-AJBMOH16',
      ariaLabel: 'Business',
    },
    {
      title: 'Private Wealth',
      linkHref:
        'https://www.bmo.com/privatewealth/?icid=tl-FEAT2953BRND4-AJBMOH15',
      ariaLabel: 'Private Wealth',
    },
    {
      title: 'Commercial',
      linkHref:
        'https://commercial.bmo.com/en/ca/?icid=tl-FEAT2953BRND4-AJBMOH17',
      ariaLabel: 'Commercial',
    },
    {
      title: 'Capital Markets',
      linkHref:
        'https://capitalmarkets.bmo.com/en/?icid=tl-FEAT2953BRND4-AJBMOH18',
      ariaLabel: 'Capital Markets',
    },
    {
      title: 'Global Asset Management',
      linkHref: 'https://www.bmogam.com/?icid=tl-FEAT2953BRND4-AJBMOH19',
      ariaLabel: 'Global Asset Management',
    },
    {
      title: 'About BMO',
      linkHref: 'https://www.bmo.com/main/about-bmo/',
      ariaLabel: 'About BMO',
    },
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
