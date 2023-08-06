import { Injectable } from '@angular/core';

interface tabsType {
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsTabsService {
  tabs: any = [
    {
      label: 'Featured',
      cardData: [
        {
          image:
            '../../../../assets/images/personal-special-offer-tile-picture.jpg',
          title: 'Special Offers',
          description:
            'From everyday banking to credit cards, find ways to save money and make real financial progress.',
          src: 'https://www.bmo.com/main/personal/promotions/',
          srcTitle: 'Explore Offers',
        },
        {
          svg: '../../../../assets/svg/copy-icon.svg',
          title: 'Financial resources',
          description:
            'Access our financial resource hub to help you manage your money and plan for your future.',
          src: 'https://www.bmo.com/main/personal/financial-resource-hub/',
          srcTitle: 'Get Started',
        },
        {
          svg: '../../../../assets/svg/support-icon.svg',
          title: 'BMO online support',
          description:
            'The fastest way for you to get support. Start by answering a few questions.',
          src: 'https://www.bmo.com/main/personal/contact-centre-support-tool/',
          srcTitle: 'Get Support',
        },
        {
          svg: '../../../../assets/svg/handshake-icon.svg',
          title: 'The bank of soccer',
          description:
            'BMO is named the Official Supporter of the FIFA Women’s World Cup 2023™ in North America.',
          src: 'https://about.bmo.com/bmo-named-official-supporter-of-fifa-womens-world-cup-2023-in-north-america/',
          srcTitle: 'Learn More',
        },
        {
          svg: '../../../../assets/svg/graduate-online-icon.svg',
          title: 'BMO SmartProgress™',
          description:
            'Explore resources and tools that will help strengthen your financial literacy skills.',
          src: 'https://bmosmartprogress.everfi-next.net/welcome/financialeducation?locale=en',
          srcTitle: 'Explore Now',
        },
        {
          image: '../../../../assets/images/personal-award-tile-picture.jpg',
          title: 'BMO ranked #1 for online banking',
          description:
            'BMO has received the highest customer satisfaction ranking for online banking.',
          src: 'https://newsroom.bmo.com/2023-06-08-BMO-Ranks-First-in-Customer-Satisfaction-with-Online-Banking-in-the-J-D-Power-2023-Canada-Online-Banking-Satisfaction-Study',
          srcTitle: 'Learn More',
        },
      ],
    },
    {
      label: 'Bank Accounts',
    },
    {
      label: 'Credit Cards',
    },
    {
      label: 'Mortgages',
    },
    {
      label: 'Investments',
    },
    {
      label: 'Learning',
    },
  ];

  constructor() {}
}
