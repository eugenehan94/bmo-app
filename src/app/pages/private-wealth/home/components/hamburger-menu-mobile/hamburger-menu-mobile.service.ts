import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HamburgerMenuMobileService {
  constructor() {}

  countrySelectorMenuOptions = [
    {
      country: 'Canada',
      icon: 'assets/svg/checkmark-circle.svg',
    },
    {
      country: 'US',
      icon: 'assets/svg/flag-usa-icon.svg',
    },
    {
      country: 'China',
      icon: 'assets/svg/flag-china-icon.svg',
    },
  ];

  siteSelectorMenuOptions = [
    {
      id: 0,
      routerLink: '/',
      ariaLabel: 'Personal',
      linkName: 'Personal',
    },
    {
      id: 1,
      routerLink: '/business',
      ariaLabel: 'Business',
      linkName: 'Business',
    },
    {
      id: 2,
      routerLink: '/private-wealth',
      ariaLabel: 'Private wealth',
      linkName: 'Private Wealth',
    },
    {
      id: 3,
      hrefLink:
        'https://commercial.bmo.com/en/ca/?icid=tl-FEAT2953BRND4-AJBMOH17',
      ariaLabel: 'Commercial',
      linkName: 'Commercial',
    },
  ];
}
