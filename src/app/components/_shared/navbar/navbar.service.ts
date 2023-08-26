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
          link: 'https://www.bmo.com/main/personal/bank-accounts/?icid=tl-FEAT2953BRND4-AJBMOH32',
          ariaLabel: 'Bank Accounts Overview',
        },
        {
          title: 'Chequing Accounts',
          children: [
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/?icid=ba-FEAT1907EDB4-ATBMO14',
              ariaLabel: 'All chequing accounts',
              icon: 'assets/svg/all-layers-blue.svg',
              alt: 'Blue coloured layers',
              title: 'All chequing accounts',
              description: 'Explore your options',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/plus/?icid=tl-FEAT2953BRND4-AJBMOH372',
              ariaLabel: 'Plus Chequing accounts, Flexible, budget-friendly',
              icon: 'assets/svg/plus-circle-blue.svg',
              alt: 'Blue circle with plus sign',
              title: 'Plus Chequing',
              description: 'Flexible, budget-friendly',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/performance/?icid=tl-FEAT2953BRND4-AJBMOH370',
              ariaLabel: 'Performance chequing account, Most popular',
              icon: 'assets/svg/speedometer-blue.svg',
              alt: 'Blue speedometer',
              title: 'Performance Chequing',
              description: 'Most popular',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/practical/?icid=tl-FEAT2953BRND4-AJBMOH373',
              ariaLabel: 'Practical chequing account, Lowest fee',
              icon: 'assets/svg/hand-gear-blue.svg',
              alt: 'Blue hand with gear',
              title: 'Practical Chequing',
              description: 'Lowest fee',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/premium/?icid=tl-FEAT2953BRND4-AJBMOH371',
              ariaLabel: 'Premium chequing account, Most benefits',
              icon: 'assets/svg/diamond-blue.svg',
              alt: 'Blue diamond',
              title: 'Premium Chequing',
              description: 'Most benefits',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/air-miles/?icid=tl-FEAT2953BRND4-AJBMOH374',
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
              link: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/?icid=ba-FEAT1907EDB4-ATBMO16',
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
              link: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/savings-amplifier/?icid=tl-FEAT2953BRND4-AJBMOH375',
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
              link: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/savings-builder/?icid=tl-FEAT2953BRND4-AJBMOH377',
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
              link: 'https://www.bmo.com/main/personal/students/?icid=tl-FEAT2953BRND4-AJBMOH28',
              ariaLabel:
                'Banking options for students, Offers, bonuses and more',
              icon: 'assets/svg/students-icon-blue.svg',
              alt: 'Blue student graduation cap',
              title: 'Students',
              description: 'Offers, bonuses and more',
            },
            {
              link: 'https://www.bmo.com/main/personal/seniors-banking/?icid=US58746EDB-BMO049',
              ariaLabel:
                'Banking options for seniors, Over 60? We’ve got you covered',
              icon: 'assets/svg/seniors-icon-blue.svg',
              alt: 'Blue seniors icon',
              title: 'Seniors',
              description: 'Over 60? We’ve got you covered',
            },
            {
              link: 'https://www.bmo.com/main/personal/newcomers-to-canada/?icid=tl-FEAT2953BRND4-AJBMOH29',
              ariaLabel: 'Banking options for newcomers to Canada',
              icon: 'assets/svg/maple-leaf-blue.svg',
              alt: 'Blue maple leaf',
              title: 'Newcomers',
              description: 'Banking options for newcomers',
            },
            {
              link: 'https://www.bmo.com/main/personal/canadian-defence-community-banking/?icid=tl-FEAT2953BRND4-AJBMOH30',
              ariaLabel:
                'Banking options for Canadian defence community, Banking options for eligible members',
              icon: 'assets/svg/star-ribbon-blue.svg',
              alt: 'Blue ribbon with star',
              title: 'Canadian Defence Community',
              description: 'Banking options for eligible members',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/family-bundle/?icid=tl-FEAT2953BRND4-AJBMOH26',
              ariaLabel:
                'Family bundle bank accounts, Benefits for the entire family',
              icon: 'assets/svg/family-blue.svg',
              alt: 'Blue family icon',
              title: 'Family Bundle',
              description: 'Benefits for the entire family',
            },
            {
              link: 'https://www.bmo.com/main/personal/indigenous-banking/?icid=tl-FEAT2953BRND4-AJBMOH31',
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
          link: 'https://www.bmo.com/main/personal/bank-accounts/new-bank-account-offers-and-promotions/?icid=tl-FEAT2953BRND4-AJBMOH379',
          ariaLabel: 'Special bank account offers',
        },
        {
          title: 'BMO Digital Banking',
          link: 'https://www.bmo.com/main/personal/ways-to-bank/digital-banking/?icid=tl-FEAT2953BRND4-AJBMOH27',
          ariaLabel: 'B M O digital banking',
        },
      ],
      resources: [
        {
          link: 'https://www.bmo.com/main/personal/bank-accounts/chequing-accounts/compare/?icid=tl-FEAT2953BRND4-AJBMOH34',
          ariaLabel: 'Compare chequing accounts, easily compare your options',
          icon: 'assets/svg/compass-blue.svg',
          alt: 'Blue compass',
          title: 'Compare chequing accounts',
          description: 'Easily compare your options',
        },
        {
          link: 'https://www.bmo.com/main/personal/bank-accounts/?icid=tl-FEAT2953BRND4-AJBMOH33#help-me-choose',
          ariaLabel: 'Help me choose, answer a few short questions',
          icon: 'assets/svg/helpme-choose-blue.svg',
          alt: 'Blue circle with question mark',
          title: 'Help me choose',
          description: 'Answer a few short questions',
        },
        {
          link: 'https://www.bmo.com/main/personal/bank-accounts/banking-agreements-and-fees/?icid=tl-FEAT2953BRND4-AJBMOH37',
          ariaLabel: 'Banking fees and agreements',
          icon: 'assets/svg/banking-agreement-blue.svg',
          alt: 'Blue document icon',
          title: 'Banking fees and agreements',
          description: 'Access more details about your bank plan',
        },
        {
          link: 'https://www.bmo.com/oab/start?_lang=en&icid=tl-FEAT2953BRND4-AJBMOH35',
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
      categories: [
        {
          title: 'Credit Cards Overview',
          link: 'https://www.bmo.com/main/personal/credit-cards/?icid=tl-FEAT2953BRND4-AJBMOH64',
          ariaLabel: 'Credit Cards overview page',
        },
        {
          title: 'Card Types',
          children: [
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/cashback/?icid=tl-FEAT2953BRND4-AJBMOH50',
              ariaLabel: 'Cash Back Credit Card, Earn cash on all purchases',
              icon: 'assets/svg/cash-flow-blue.svg',
              alt: 'Blue cash flow',
              title: 'Cash Back',
              description: 'Earn cash on all purchases',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/low-interest-rate/?icid=tl-FEAT2953BRND4-AJBMOH54',
              ariaLabel:
                'Low interest rate credit cards,  Low fees, low interest',
              icon: 'assets/svg/low-interest-blue.svg',
              alt: 'Blue low interest rate icon',
              title: 'Low Interest Rate',
              description: 'Low fees, low interest',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/rewards/?icid=tl-FEAT2953BRND4-AJBMOH51',
              ariaLabel: 'Rewards Credit card, Earn rewards on every dollar',
              icon: 'assets/svg/bmo-rewards-blue.svg',
              alt: 'Blue star',
              title: 'Rewards',
              description: 'Earn rewards on every dollar',
            },
            {
              link: 'https://www.bmo.com/en-ca/main/personal/credit-cards/travel/?icid=tl-FEAT2953BRND4-AJBMOH55',
              ariaLabel: 'Travel credit cards, Earn points on travel',
              icon: 'assets/svg/retirement-calculator-blue.svg',
              alt: 'Blue beach with palm tree and sun',
              title: 'Travel',
              description: 'Earn points on travel',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/airmiles/?icid=tl-FEAT2953BRND4-AJBMOH52',
              ariaLabel:
                'Air miles credit card, For travel, merchandise & more',
              icon: 'assets/svg/airmiles-blue.svg',
              alt: 'Blue plane',
              title: 'AIR MILES',
              description: 'For travel, merchandise & more',
            },
            {
              link: 'https://www.bmo.com/en-ca/main/personal/credit-cards/lifestyle/?icid=tl-FEAT2953BRND4-AJBMOH56',
              ariaLabel: 'Lifestyle credit cards, Enjoy everyday rewards',
              icon: 'assets/svg/lifestyle-blue.svg',
              alt: 'Blue avatar with star',
              title: 'Lifestyle',
              description: 'Enjoy everyday rewards',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/no-annual-fee/?icid=tl-FEAT2953BRND4-AJBMOH53',
              ariaLabel: 'No annual fee credit card, Keep your costs low',
              icon: 'assets/svg/card-no-fee-blue.svg',
              alt: 'Blue card with crossed out dollar sign',
              title: 'No Fee',
              description: 'Keep your costs low',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/all-cards/?icid=tl-FEAT2953BRND4-AJBMOH61',
              ariaLabel: 'All credit cards, Explore your options',
              icon: 'assets/svg/credit-card-blue-icon.svg',
              alt: 'Blue card with crossed out dollar sign',
              title: 'No Fee',
              description: 'Keep your costs low',
            },
          ],
        },
        {
          title: 'Specialty Cards',
          children: [
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/students/?icid=tl-FEAT2953BRND4-AJBMOH57',
              ariaLabel: 'Student credit cards, Enjoy no annual fee',
              icon: 'assets/svg/students-icon-blue.svg',
              alt: 'Blue student graduation cap',
              title: 'Students',
              description: 'Enjoy no annual fee',
            },
            {
              src: 'https://www.bmo.com/main/personal/credit-cards/affinity/?icid=tl-FEAT2953BRND4-AJBMOH58',
              ariaLabel: 'Affinity credit card, Cards that support your cause',
              icon: 'assets/svg/card-heart-blue.svg',
              alt: 'Blue card with heart',
              title: 'Affinity',
              description: 'Cards that support your cause',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/newcomers-to-canada/?icid=tl-US72013CC4-AMBMO14',
              ariaLabel:
                'Credit cards for those new to Canada, Build your credit history',
              icon: 'assets/svg/maple-leaf-blue.svg',
              alt: 'Blue maple leaf',
              title: 'New to Canada',
              description: 'Build your credit history',
            },
            {
              src: 'https://www.bmo.com/main/personal/credit-cards/prepaid-credit-cards/?icid=tl-FEAT2953BRND4-AJBMOH60',
              ariaLabel:
                'Pre-paid credit cards, A reloadable, secure Mastercard',
              icon: 'assets/svg/card-hand-blue.svg',
              alt: 'Blue card with hand',
              title: 'Pre-paid',
              description: 'A reloadable, secure Mastercard',
            },
            {
              link: 'https://www.bmo.com/main/personal/bank-accounts/savings-accounts/savings-builder/?icid=tl-FEAT2953BRND4-AJBMOH377',
              ariaLabel:
                'Business credit cards, Earn rewards, air miles and more',
              icon: 'assets/svg/briefcase-blue.svg',
              alt: 'Blue briefcase',
              title: 'Business',
              description: 'Earn rewards, AIR MILES, and more',
            },
          ],
        },
        {
          title: 'Digital Wallet & Tools',
          children: [
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/credit-card-access-details/?icid=tl-FEAT2953BRND4-AJBMOH63',
              ariaLabel:
                'B M O Powerswitch option, Transfer your pre-authorized payments',
              icon: 'assets/svg/arrows-left-blue.svg',
              alt: 'Blue arrows pointing left and right',
              title: 'BMO PowerSwitch',
              description: 'Transfer your pre-authorized payments',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/google-pay?icid=tl-US25692CC1-JCBMO14',
              ariaLabel: 'Google pay options, Pay securely using Google Pay',
              icon: 'assets/svg/google-pay-blue.svg',
              alt: 'Blue Google pay',
              title: 'Google Pay',
              description: 'Pay securely using Google Pay',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/paysmart-installment-plans/?icid=tl-FEAT2654CC1-AMBMO23',
              ariaLabel:
                'B M O Paysmart options, Pay your credit card off in interest-free instalments',
              icon: 'assets/svg/auto-pay-blue.svg',
              alt: 'Blue BMO PaySmart',
              title: 'BMO PaySmart',
              description:
                'Pay your credit card off in interest-free instalments',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/click-to-pay/?icid=tl-FEAT2953BRND4-AJBMOH62',
              ariaLabel: 'Click to pay options, Safely check out with B M O',
              icon: 'assets/svg/click-to-pay-blue.svg',
              alt: 'Blue click to pay',
              title: 'Click to Pay',
              description: 'Safely check out with BMO',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/apple-pay/?icid=tl-US817CC1-EYMCA14',
              ariaLabel: 'Apple Pay options, Pay securely using Apple Pay',
              icon: 'assets/svg/family-blue.svg',
              alt: 'Blue Apple Pay',
              title: 'Apple Pay',
              description: 'Pay securely using Apple Pay',
            },
          ],
        },
        {
          title: 'Safety & Travel',
          children: [
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/credit-card-security-protection/?icid=tl-FEAT2953BRND4-AJBMOH68',
              ariaLabel: 'Safety and security',
              icon: 'assets/svg/security-lock-blue.svg',
              alt: 'Blue security lock',
              title: 'Safety & Security',
              description: 'Your protection is our priority',
            },
            {
              link: 'https://www.bmo.com/main/personal/credit-cards/credit-card-travel-insurance/?icid=tl-FEAT2953BRND4-AJBMOH69',
              ariaLabel: 'Travel Services',
              icon: 'assets/svg/retirement-calculator-blue.svg',
              alt: 'Blue beach with tree and sun',
              title: 'Travel Services',
              description: 'Everything you need on your trip',
            },
          ],
        },
      ],
      resources: [
        {
          link: 'https://www.bmo.com/online/creditcards/activate-credit-card/?icid=tl-FEAT2953BRND4-AJBMOH65',
          ariaLabel:
            'Activate your card, Set up your card in 1 minute, opens in a new tab',
          icon: 'assets/svg/card-resource-blue.svg',
          alt: 'Blue bank card',
          title: 'Activate your card',
          description: 'Set up your card in 1 minute',
        },
        {
          link: 'https://www.bmo.com/main/personal/credit-cards/compare-tool/?icid=tl-FEAT2953BRND4-AJBMOH66',
          ariaLabel: 'Compare B M O credit cards, Easily compare your options',
          icon: 'assets/svg/compass-blue.svg',
          alt: 'Blue balance scale',
          title: 'Compare credit cards',
          description: 'Easily compare your options',
        },
        {
          link: 'https://www.bmo.com/main/personal/bank-accounts/banking-agreements-and-fees/?icid=tl-FEAT2953BRND4-AJBMOH37',
          ariaLabel: 'Banking fees and agreements',
          icon: 'assets/svg/banking-agreement-blue.svg',
          alt: 'Blue document icon',
          title: 'Banking fees and agreements',
          description: 'Access more details about your bank plan',
        },
        {
          link: 'https://www.bmo.com/main/personal/credit-cards/how-to-choose-a-credit-card/?icid=tl-FEAT2953BRND4-AJBMOH67',
          ariaLabel:
            'Help me choose a credit card, Answer a few short questions',
          icon: 'assets/svg/helpme-choose-blue.svg',
          alt: 'Blue question mark',
          title: 'Help me choose a card',
          description: 'Answer a few short questions',
        },
      ],
    },
    {
      title: 'Mortgages',
      categories: [
        {
          title: 'Mortgages Overview',
          link: 'https://www.bmo.com/main/personal/mortgages/?icid=tl-FEAT2953BRND4-AJBMOH100',
          ariaLabel: 'Mortgages Overview',
        },
        {
          title: 'Mortgage Rates',
          link: 'https://www.bmo.com/main/personal/mortgages/mortgage-rates/?icid=tl-FEAT2953BRND4-AJBMOH90',
          ariaLabel: 'Mortgage rates',
        },
        {
          title: 'Special Offers',
          link: 'https://www.bmo.com/main/personal/mortgages/special-offers/?icid=tl-FEAT2953BRND4-AJBMOH381',
          ariaLabel: 'Learn more about special mortgage offer at B M O',
        },
      ],
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
