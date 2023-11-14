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
              ariaLabel: 'business builder three, Most flexible',
              icon: 'assets/svg/business-builder-3-blue.svg',
              alt: 'Blue ladder with number three',
              title: 'Business Builder 3',
              description: 'Most flexible',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/community-account/',
              ariaLabel:
                'Not for profit community chequing account, Not-for-profit',
              icon: 'assets/svg/community-invest-blue.svg',
              alt: 'Three blue people icon with one dollar sign',
              title: 'Community Account',
              description: 'Not-for-profit',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/business-builder-4/',
              ariaLabel: 'business builder four, Most benefits',
              icon: 'assets/svg/business-builder-4-blue.svg',
              alt: 'Blue ladder with number 4',
              title: 'Business Builder 4',
              description: 'Most benefits',
            },
          ],
        },
        {
          title: 'Savings Accounts',
          children: [
            {
              link: 'https://www.bmo.com/main/business/accounts/business-premium-rate-savings/',
              ariaLabel:
                'Business premium rate savings account, Earn higher interest',
              icon: 'assets/svg/bar-chart-growth-invest-blue.svg',
              alt: 'Blue bar chart with appreciation arrow and dollar sign',
              title: 'Business Premium Rate Savings Account',
              description: 'Earn higher interest',
            },
            {
              link: 'https://www.bmo.com/main/business/accounts/agriinvest-account/',
              ariaLabel: 'Agriculture account',
              icon: 'assets/svg/agriculture-invest-blue.svg',
              alt: 'Blue corn with dollar sign',
              title: 'AgriInvest Account',
              description: 'No monthly fee',
            },
          ],
        },
      ],
      resources: [
        {
          link: 'https://www.bmo.com/main/business/accounts/help-me-choose-a-business-bank-account',
          ariaLabel: 'Help me choose a business bank account',
          icon: 'assets/svg/helpme-choose-blue.svg',
          alt: 'Blue question icon',
          title: 'Help me choose an account',
          description: 'Choose an option based on your needs',
        },
        {
          link: 'https://www.bmo.com/main/business/accounts/ebusiness-plan/#what-to-bring',
          ariaLabel: 'What to bring to business bank account appointment',
          icon: 'assets/svg/add-accounts-blue.svg',
          alt: 'Blue plus icon',
          title: 'What to bring to your appointment',
          description: 'Get your documents ready',
        },
        {
          link: 'https://www.bmo.com/main/business/small-business-resource-hub/',
          ariaLabel: 'Business resource hub',
          icon: 'assets/svg/book-blue.svg',
          alt: 'Blue book icon',
          title: 'Business resource hub',
          description: 'Access the latest articles and tools ',
        },
      ],
    },
    {
      title: 'Credit Cards',
      categories: [
        {
          title: 'Credit Cards Overview',
          link: 'https://www.bmo.com/main/business/credit-cards/',
          ariaLabel: 'Business Credit Cards Overview',
        },
        {
          title: 'Credit Cards for Business',
          children: [
            {
              link: 'https://www.bmo.com/main/business/credit-cards/bmo-rewards-world-elite-business-mastercard/',
              ariaLabel: 'B M O world elite rewards business mastercard',
              icon: 'assets/svg/bmo-rewards-48x48-blue.svg',
              alt: 'Blue star icon',
              title: 'BMO World Elite Rewards Business Mastercard',
              description: 'Rewards on all your purchases',
            },
            {
              link: 'https://www.bmo.com/main/business/credit-cards/bmo-airmiles-world-elite-business-mastercard/',
              ariaLabel: 'B M O airmiles world elite business mastercard',
              icon: 'assets/svg/airmiles-blue.svg',
              alt: 'Blue airplane icon',
              title: 'BMO World Elite AIR MILES Business Mastercard',
              description: 'Maximize AIR MILES earned',
            },
            {
              link: 'https://www.bmo.com/main/business/credit-cards/bmo-cashback-no-fee-business-mastercard/',
              ariaLabel: 'B M O cashback no fee business mastercard',
              icon: 'assets/svg/cash-flow-blue.svg',
              alt: 'Blue cash',
              title: 'BMO CashBack Business Mastercard',
              description: 'Money back on all business expenses',
            },
            {
              link: 'https://www.bmo.com/main/business/credit-cards/bmo-airmiles-no-fee-business-mastercard/',
              ariaLabel: 'B M O airmiles no fee business mastercard',
              icon: 'assets/svg/card-no-fee-blue.svg',
              alt: 'Blue card with dollar sign crossed out',
              title: 'BMO AIR MILES No-Fee Business Mastercard',
              description: 'Earn Reward Miles on all spending',
            },
          ],
        },
        {
          title: 'Redeem Your Rewards',
          children: [
            {
              link: 'https://bmorewards.com/',
              ariaLabel: ' B M O Rewards, Redeem your points your way',
              icon: 'assets/svg/bmo-reward-trophy-blue.svg',
              alt: 'Blue trophy with star',
              title: 'BMO Rewards',
              description: 'Redeem your points your way',
            },
            {
              link: 'https://www.airmiles.ca/en.html?changeLocale=en_CA',
              ariaLabel: 'air miles, Redeem your air miles directly',
              icon: 'assets/svg/airmiles-blue.svg',
              alt: 'Blue airplane icon',
              title: 'AIR MILES',
              description: 'Redeem your AIR MILES directly',
            },
          ],
        },
      ],
      resources: [
        {
          link: 'https://www.bmo.com/online/creditcards/activate-credit-card/?icid=tl-FEAT2953BRND4-AJBMOH65',
          ariaLabel:
            'Activate my card, New card? Get started now , opens in a new tab',
          icon: 'assets/svg/card-resource-blue.svg',
          alt: 'Blue card icon',
          title: 'Activate my card',
          description: 'New card? Get started now ',
        },
        {
          link: 'https://www.bmo.com/main/personal/credit-cards/how-to-choose-a-credit-card/',
          ariaLabel: 'Help me choose a credit card resouce link',
          icon: 'assets/svg/helpme-choose-blue.svg',
          alt: 'Blue question icon',
          title: 'Help me choose a card',
          description: 'Let us recommend the best card ',
        },
      ],
    },
  ];
}
