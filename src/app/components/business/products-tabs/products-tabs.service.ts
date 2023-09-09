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
  ];
}
