import { Injectable } from '@angular/core';
import { TabsType } from 'src/app/components/_shared/interfaces';
// @TODO: Add aria-label to cardDatas
@Injectable({
  providedIn: 'root',
})
export class ProductsTabsService {
  constructor() {}

  tabs: TabsType[] = [
    {
      label: 'Featured',
      cardData: [
        {
          image: 'assets/images/business-tile-quick-flexible-top.png',
          imageAlt: 'Special offers',
          title: 'Quick, flexible financing1',
          description:
            'Enjoy rates as low as BMO Prime +2% with a Credit Line for Business.1 ',
          src: 'https://www.bmo.com/main/business/loans-mortgages/credit-line/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/all-cards-polar-white.svg',
          svgAlt: 'Cards',
          title: 'BMO World Elite®* Business Mastercard®*',
          description:
            'Earn rewards on all your business purchases, and get extra points from your most common business expenses.',
          src: 'https://www.bmo.com/main/business/credit-cards/bmo-rewards-world-elite-business-mastercard/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/profile-star-polar.svg',
          svgAlt: 'Profile star',
          title: 'Special offers for businesses',
          description:
            'Give your business a boost with our range of special offers.',
          src: 'Give your business a boost with our range of special offers.',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/document-checkmark-polar-white.svg',
          svgAlt: 'Document with checkmark',
          title: 'CEBA program updates',
          description:
            'Get the latest information on the Canada Emergency Business Account ( CEBA C E B A).',
          src: 'https://www.bmo.com/main/business/covid-19-business-support/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/calculator-polar-white.svg',
          svgAlt: 'Calculator',
          title: 'Business loan calculator',
          description:
            "Let's crunch the numbers and find out what your payments could be.",
          src: 'https://www.bmo.com/main/business/loans-mortgages/business-loan-calculator/',
          srcTitle: 'Get Started',
        },
        {
          image: 'assets/images/business-tile-celebrating-women.png',
          imageAlt: 'Celebrating women',
          title: 'Celebrating women',
          description:
            'Discover the only bank-owned recognition program for women in North America.',
          src: 'https://bmoforwomen.com/celebrating-women/',
          srcTitle: 'Learn More',
        },
      ],
    },
    {
      label: 'Bank Accounts',
      cardData: [
        {
          image: 'assets/images/business-tile-e-business.png',
          imageAlt: 'Person in E commerce',
          title: 'eBusiness Plan',
          description:
            'Bank more easily with no monthly fees, no minimum balance, and unlimited Moneris and electronic transactions.* ',
          src: 'https://www.bmo.com/main/business/accounts/ebusiness-plan/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/wallet-white.svg',
          imageAlt: 'Wallet',
          title: 'Open a Business Bank Account',
          description:
            'Explore our options and find the best business bank account to help you reach your goals.',
          src: 'https://www.bmo.com/main/business/accounts/overview/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/video-polar-white.svg',
          svgAlt: 'Video play button',
          title: 'Get organized',
          description:
            'Three reasons to open a business bank account to help you stay on top of your finances.',
          src: 'https://youtu.be/C7MBYZYuhs0',
          srcTitle: 'Play Video',
        },
      ],
    },
    {
      label: 'Credit Cards',
      cardData: [
        {
          image: 'assets/images/business-tile-credit-card-coffee.jpg',
          imageAlt: 'People in coffee shop',
          title: 'Credit cards',
          description:
            'Get even more from your business-related expenses with the right credit card for your exclusive needs.',
          src: 'https://www.bmo.com/main/business/credit-cards/',
          srcTitle: 'Browse Now',
        },
        {
          svg: 'assets/svg/all-cards-polar-white.svg',
          imageAlt: 'Cards',
          title: 'BMO CashBack® Business Mastercard®*',
          description:
            'Get 10% cash back on common business expenses for 3 months with no annual fee!1',
          src: 'https://www.bmo.com/main/business/credit-cards/bmo-cashback-no-fee-business-mastercard/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/hand-card-polar-white.svg',
          imageAlt: 'Hand holding card',
          title: 'Help me choose a credit card',
          description:
            "Answer a few questions and we'll recommend one or two cards that suit you the best.",
          src: 'https://www.bmo.com/main/personal/credit-cards/how-to-choose-a-credit-card/',
          srcTitle: 'Get Started',
        },
        {
          svg: 'assets/svg/clipboard-pen-polar-white.svg',
          imageAlt: 'Clipboard with pen',
          title: '5 ways to build your business credit',
          description:
            'Make building your business credit a priority to ensure you’re maximizing your borrowing power.',
          src: 'https://www.bmo.com/main/business/news/build-credit/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/list-dollar-polar-white.svg',
          imageAlt: 'List with dollar sign',
          title: 'Stay in control of your cash flow',
          description:
            'Get six tips for controlling your finances — and give your business a financial fresh start.',
          src: 'https://www.bmo.com/main/business/news/small-business-finances/',
          srcTitle: 'Learn More',
        },
        {
          image: 'assets/images/business-tile-world-elite-cc.png',
          imageAlt: 'Person holding world elite credit card',
          title: 'BMO World Elite®* Business Mastercard®*',
          description:
            'Earn up to 50,000 points when you spend $5,000 in the first three months.1',
          src: 'https://www.bmo.com/main/business/credit-cards/bmo-rewards-world-elite-business-mastercard/',
          srcTitle: 'Learn More',
        },
      ],
    },
    {
      label: 'Lending',
      cardData: [
        {
          image: 'assets/images/business-tile-credit-line.png',
          imageAlt: 'Person looking into laptop screen',
          title: 'Credit Line for Business',
          description:
            'Borrow on demand and enjoy rates as low as BMO Prime +2%.1',
          src: 'https://www.bmo.com/main/business/loans-mortgages/credit-line/',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/list-dollar-polar-white.svg',
          imageAlt: 'List with dollar sign',
          title: 'Business loans & commercial mortgages',
          description:
            'A growing business needs access to funds to stay competitive and realize its full potential.',
          src: 'https://www.bmo.com/main/business/loans-mortgages/overview',
          srcTitle: 'Learn More',
        },
        {
          svg: 'assets/svg/calculator-polar-white.svg',
          imageAlt: 'Calculator',
          title: 'Business loan calculator',
          description:
            'Let’s crunch the numbers and find out what your payments could be.',
          src: 'https://www.bmo.com/main/business/loans-mortgages/business-loan-calculator/',
          srcTitle: 'Get Started',
        },
        {
          svg: 'assets/svg/hand-coin-polar-white.svg',
          imageAlt: 'Hand with dollar sign',
          title: 'Trade Expansion Lending Program (TELP)',
          description:
            'A program to help Canadian businesses compete on a global scale.',
          src: 'https://www.bmo.com/main/business/loans-mortgages/trade-expansion-lending-program/',
          srcTitle: 'Learn More',
        },
      ],
    },
  ];
}
