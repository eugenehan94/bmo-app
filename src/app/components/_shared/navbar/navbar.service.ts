import { Injectable } from '@angular/core';
import {
  SiteOptionsType,
  NavigationOptionsType,
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
  // navigationOptions: NavigationOptionsType[]
  navigationOptions: any = [
    {
      title: 'Bank Accounts',
      categories: [
        {
          title: 'Bank Accounts Overview',
          src: 'https://www.bmo.com/main/personal/bank-accounts/?icid=tl-FEAT2953BRND4-AJBMOH32',
          ariaLabel: 'Bank Accounts Overview',
        },
        {
          title: 'Chequing Accounts',
          children: [
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/?icid=ba-FEAT1907EDB4-ATBMO14',
              ariaLabel: 'All chequing accounts',
              icon: 'assets/svg/all-layers-blue.svg',
              alt: 'Blue coloured layers',
              title: 'All chequing accounts',
              description: 'Explore your options',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/plus/?icid=tl-FEAT2953BRND4-AJBMOH372',
              ariaLabel: 'Plus Chequing accounts, Flexible, budget-friendly',
              icon: 'assets/svg/plus-circle-blue.svg',
              alt: 'Blue circle with plus sign',
              title: 'Plus Chequing',
              description: 'Flexible, budget-friendly',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/performance/?icid=tl-FEAT2953BRND4-AJBMOH370',
              ariaLabel: 'Performance chequing account, Most popular',
              icon: 'assets/svg/speedometer-blue.svg',
              alt: 'Blue speedometer',
              title: 'Performance Chequing',
              description: 'Most popular',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/practical/?icid=tl-FEAT2953BRND4-AJBMOH373',
              ariaLabel: 'Practical chequing account, Lowest fee',
              icon: 'assets/svg/hand-gear-blue.svg',
              alt: 'Blue hand with gear',
              title: 'Practical Chequing',
              description: 'Lowest fee',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/premium/?icid=tl-FEAT2953BRND4-AJBMOH371',
              ariaLabel: 'Premium chequing account, Most benefits',
              icon: 'assets/svg/diamond-blue.svg',
              alt: 'Blue diamond',
              title: 'Premium Chequing',
              description: 'Most benefits',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/air-miles/?icid=tl-FEAT2953BRND4-AJBMOH374',
              ariaLabel:
                'Air miles rewards chequing account, For the rewards collector',
              icon: 'assets/svg/airmiles-blue.svg',
              alt: 'Blue airplane',
              title: 'AIR MILES Chequing',
              description: 'For the rewards collector',
            },
          ],
        },
        {
          title: 'Savings Accounts',
          children: [
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/?icid=ba-FEAT1907EDB4-ATBMO16',
              ariaLabel: 'All savings accounts',
              icon: 'assets/svg/all-layers-blue.svg',
              alt: 'Blue coloured layers',
              title: 'All savings accounts',
              description: 'Explore your options',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/premium-rate-savings/?icid=tl-FEAT2953BRND4-AJBMOH376',
              ariaLabel: 'Premium rate savings, flexible and convenient',
              icon: 'assets/svg/diamond-dollar-blue.svg',
              alt: 'Blue diamond with dollar sign',
              title: 'Premium Rate Savings',
              description: 'Flexible and convenient',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/savings-amplifier/?icid=tl-FEAT2953BRND4-AJBMOH375',
              ariaLabel: 'Savings amplifier account, Most benefits',
              icon: 'assets/svg/bullseye-dollar-blue.svg',
              alt: 'Blue bulls eye with dollar sign',
              title: 'Savings Amplifier',
              description: 'High interest rate',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/us-prem-savings/?icid=tl-FEAT2953BRND4-AJBMOH378',
              ariaLabel:
                'U S dollar premium rate savings, For the U.S. traveller',
              icon: 'assets/svg/dollar-climb-blue.svg',
              alt: 'Blue dollar with appreciating arrow',
              title: 'U.S. Dollar Premium Rate Savings',
              description: 'Earn interest on U.S. dollars',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/savings-builder/?icid=tl-FEAT2953BRND4-AJBMOH377',
              ariaLabel: 'Savings builder account, Bonus interest',
              icon: 'assets/svg/steps-dollar-blue.svg',
              alt: 'Blue steps with dollar sign',
              title: 'Savings Builder',
              description: 'Bonus interest',
            },
          ],
        },
        {
          title: 'Banking For',
          children: [
            {
              src: 'https://www.bmo.com/main/personal/students/?icid=tl-FEAT2953BRND4-AJBMOH28',
              ariaLabel:
                'Banking options for students, Offers, bonuses and more',
              icon: 'assets/svg/students-icon-blue.svg',
              alt: 'Blue student graduation cap',
              title: 'Students',
              description: 'Offers, bonuses and more',
            },
            {
              src: 'https://www.bmo.com/main/personal/seniors-banking/?icid=US58746EDB-BMO049',
              ariaLabel:
                'Banking options for seniors, Over 60? We’ve got you covered',
              icon: 'assets/svg/seniors-icon-blue.svg',
              alt: 'Blue seniors icon',
              title: 'Seniors',
              description: 'Over 60? We’ve got you covered',
            },
            {
              src: 'https://www.bmo.com/main/personal/newcomers-to-canada/?icid=tl-FEAT2953BRND4-AJBMOH29',
              ariaLabel: 'Banking options for newcomers to Canada',
              icon: 'assets/svg/maple-leaf-blue.svg',
              alt: 'Blue maple leaf',
              title: 'Newcomers',
              description: 'Banking options for newcomers',
            },
            {
              src: 'https://www.bmo.com/main/personal/canadian-defence-community-banking/?icid=tl-FEAT2953BRND4-AJBMOH30',
              ariaLabel:
                'Banking options for Canadian defence community, Banking options for eligible members',
              icon: 'assets/svg/star-ribbon-blue.svg',
              alt: 'Blue ribbon with star',
              title: 'Canadian Defence Community',
              description: 'Banking options for eligible members',
            },
            {
              src: 'https://www.bmo.com/main/personal/bank-accounts/family-bundle/?icid=tl-FEAT2953BRND4-AJBMOH26',
              ariaLabel:
                'Family bundle bank accounts, Benefits for the entire family',
              icon: 'assets/svg/family-blue.svg',
              alt: 'Blue family icon',
              title: 'Family Bundle',
              description: 'Benefits for the entire family',
            },
            {
              src: 'https://www.bmo.com/main/personal/indigenous-banking/?icid=tl-FEAT2953BRND4-AJBMOH31',
              ariaLabel:
                'Banking options for indigenous communities, Personalized support, offers and more',
              icon: 'assets/svg/avatar-blue.svg',
              alt: 'Blue avatar icon',
              title: 'Indigenous Banking',
              description: 'Personalized support, offers and more',
            },
          ],
        },
        {
          title: 'Special Offers',
          src: 'https://www.bmo.com/main/personal/bank-accounts/new-bank-account-offers-and-promotions/?icid=tl-FEAT2953BRND4-AJBMOH379',
          ariaLabel: 'Special bank account offers',
        },
        {
          title: 'BMO Digital Banking',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/digital-banking/?icid=tl-FEAT2953BRND4-AJBMOH27',
          ariaLabel: 'B M O digital banking',
        },
      ],
      resources: [
        {
          src: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/compare/?icid=tl-FEAT2953BRND4-AJBMOH34',
          ariaLabel: 'Compare chequing accounts, easily compare your options',
          icon: 'assets/svg/compass-blue.svg',
          alt: 'Blue compass',
          title: 'Compare chequing accounts',
          description: 'Easily compare your options',
        },
        {
          src: 'https://www.bmo.com/main/personal/bank-accounts/?icid=tl-FEAT2953BRND4-AJBMOH33#help-me-choose',
          ariaLabel: 'Help me choose, answer a few short questions',
          icon: 'assets/svg/helpme-choose-blue.svg',
          alt: 'Blue circle with question mark',
          title: 'Help me choose',
          description: 'Answer a few short questions',
        },
        {
          src: 'https://www.bmo.com/main/personal/bank-accounts/banking-agreements-and-fees/?icid=tl-FEAT2953BRND4-AJBMOH37',
          ariaLabel: 'Banking fees and agreements',
          icon: 'assets/svg/banking-agreement-blue.svg',
          alt: 'Blue document icon',
          title: 'Banking fees and agreements',
          description: 'Access more details about your bank plan',
        },
        {
          src: 'https://www.bmo.com/oab/start?_lang=en&icid=tl-FEAT2953BRND4-AJBMOH35',
          ariaLabel:
            'Book an appointment, Connect with us in person, opens in a new tab',
          icon: 'assets/svg/make-appointment-blue.svg',
          alt: 'Blue calendar icon',
          title: 'Book an appointment',
          description: 'Connect with us in person',
        },
      ],
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
}
