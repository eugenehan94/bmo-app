import { Injectable } from '@angular/core';
import {
  SiteOptionsType,
  CountryOptionsType,
  SignInMenuOptionsType,
  MobileBottomNavOptionsType,
} from '../../_shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  siteOptions: SiteOptionsType[] = [
    {
      title: 'Personal',
      linkHref: "http://localhost:4200/personal"
    },
    {
      title: 'Business',
      ariaLabel: 'Business',
      routerLink: "/business"
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

  countryOptions: CountryOptionsType[] = [
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

  signInMenuOptions: SignInMenuOptionsType[] = [
    {
      title: 'BMO InvestorLine',
      ariaLabel: 'Sign in to B M O InvestorLine',
      link: 'https://www.bmoinvestorline.com/ILClientWeb/login/DisplayLogin.jsp?refresh=true&amp;lang=E',
    },
    {
      title: 'BMO Nesbitt Burns',
      ariaLabel: 'Sign in to B M O Nesbitt Burns',
      link: 'https://gateway.bmonesbittburns.com/gwclient/en/SignIn.html',
    },
    {
      title: 'BMO SmartFolio',
      ariaLabel: 'Sign in to B M O smartfolio',
      link: 'https://www.bmosmartfolio.com/client/#/signin?lang=en-CA',
    },
    {
      title: 'BMO Private Banking',
      ariaLabel: 'Sign in to B M O smartfolio',
      link: 'https://www.login.bmoprivatebankinginvestments.com/idp/BMO/?ClientID=WP&/',
    },
    {
      title: 'BMO Credit Card',
      ariaLabel: 'Sign in to B M O credit card',
      link: 'https://www1.bmo.com/onlinebanking/cgi-bin/netbnx/NBmain?product=5',
    },
    {
      title: 'Online Banking for Business',
      ariaLabel: 'Sign into online banking for businesses',
      link: 'https://www21.bmo.com/?eaiLocaleString=en',
    },
  ];

  mobileBottomNavOptions: MobileBottomNavOptionsType[] = [
    {
      title: 'Support',
      ariaLabel: 'Contact BMO customer support, opens in a new tab',
      href: 'https://www.bmo.com/main/contact-us/',
      image: 'assets/svg/footer-sticky-support-blue.svg',
      imageAlt: 'Support icon',
    },
    {
      title: 'Branches',
      ariaLabel: 'Use our BMO branch locator tool, opens in a new tab',
      href: 'https://branchlocator.bmo.com/',
      image: 'assets/svg/footer-sticky-branch-blue.svg',
      imageAlt: 'Branch icon',
    },
    {
      title: 'Appointment',
      ariaLabel: 'Make an appointment, opens in a new tab',
      href: 'https://www.bmo.com/oab/start?_lang=en',
      image: 'assets/svg/footer-sticky-appointment-blue.svg',
      imageAlt: 'Calendar icon',
    },
  ];

}
