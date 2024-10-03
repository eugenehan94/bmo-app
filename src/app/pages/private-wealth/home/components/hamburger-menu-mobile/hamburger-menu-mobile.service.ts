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
    {
      id: 4,
      hrefLink:
        'https://capitalmarkets.bmo.com/en/?icid=tl-FEAT2953BRND4-AJBMOH18',
      ariaLabel: 'Capital Markets',
      linkName: 'Capital Markets',
    },
    {
      id: 5,
      hrefLink: 'https://www.bmogam.com/?icid=tl-FEAT2953BRND4-AJBMOH19',
      ariaLabel: 'Global Asset Management',
      linkName: 'Global Asset Management',
    },
    {
      id: 6,
      hrefLink: 'https://www.bmo.com/main/about-bmo/',
      ariaLabel: 'About B M O',
      linkName: 'About BMO',
    },
  ];

  langSelectorMenuOptions = [
    {
      id: 0,
      language: 'English',
    },
    {
      id: 1,
      language: 'Français',
      href: 'https://www.bmo.com/fr-ca/principal/gestionprivee/',
    },
    {
      id: 2,
      language: '简体中文',
      href: 'https://www.zs.bmo.com/privatewealth/',
    },
    {
      id: 3,
      language: '繁體中文',
      href: 'https://www.zh.bmo.com/privatewealth/',
    },
  ];
}
