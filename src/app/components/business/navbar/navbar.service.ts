import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  navigationOptions: any = [
    {
      title: 'Bank Accounts',
      categories: [
        {
          title: 'Bank Accounts Overview',
          link: 'https://www.bmo.com/main/business/accounts/overview/',
          ariaLabel: 'Business Bank Accounts Overview',
        },
        {
          title: 'Chequing Accounts',
          children: [
            {
              link: 'https://www.bmo.com/main/business/accounts/ebusiness-plan/',
              ariaLabel: 'eBusiness plan, Most popular, plus no monthly fee',
              icon: 'assets/svg/phone-dollar-blue.svg',
              alt: 'Blue phone with dollar',
              title: 'eBusiness Plan',
              description: 'Most popular, plus no monthly fee',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-builder-1/',
              ariaLabel: 'Business builder one, Great value',
              icon: 'assets/svg/business-builder-1-blue.svg',
              alt: 'Blue ladder with number one',
              title: 'Business Builder 1',
              description: 'Great value',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-start/',
              ariaLabel:
                'Business start chequing account, Simple, low-fee option',
              icon: 'assets/svg/power-button-blue.svg',
              alt: 'Blue power button',
              title: 'Business Start',
              description: 'Simple, low-fee option',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-builder-2/',
              ariaLabel: 'Business builder two, Comprehensive',
              icon: 'assets/svg/business-builder-2-blue.svg',
              alt: 'Blue ladding with number two',
              title: 'Business Builder 2',
              description: 'Comprehensive',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-current-account/',
              ariaLabel: 'Business current chequing account, Pay-as-you-go',
              icon: 'assets/svg/briefcase-invest-blue.svg',
              alt: 'Blue briefcase with dollar sign',
              title: 'Business Current Account',
              description: 'Pay-as-you-go',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-builder-3/',
              ariaLabel:
                'business builder three, Most flexible',
              icon: 'assets/svg/business-builder-3-blue.svg',
              alt: 'Blue ladder with number three',
              title: 'Business Builder 3',
              description: 'Most flexible',
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
  ];
}
