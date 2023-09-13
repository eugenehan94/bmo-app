import { Injectable } from '@angular/core';
import {
  FooterCategoryLinksType,
  AboutBmoDataType,
} from 'src/app/components/_shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  footerCategoryLinks: FooterCategoryLinksType[] = [
    {
      title: 'Explore our services',
      links: [
        {
          name: 'Business Accounts',
          src: 'https://www.bmo.com/main/business/accounts/overview/',
          ariaLabel: 'Explore our business accounts',
        },
        {
          name: 'Business Credit Cards',
          src: 'https://www.bmo.com/main/business/credit-cards/',
          ariaLabel: 'Explore our business credit cards',
        },
        {
          name: 'Lending',
          src: 'https://www.bmo.com/main/business/loans-mortgages/overview',
          ariaLabel: 'Explore our lending products',
        },
        {
          name: 'Managing Cash Flow',
          src: 'https://www.bmo.com/main/business/cash-management/',
          ariaLabel: 'Explore managing cash flow',
        },
      ],
    },
    {
      title: 'Banking For',
      links: [
        {
          name: 'Agriculture',
          src: 'https://www.bmo.com/main/business/who-we-work-with/agriculture/',
          ariaLabel: 'Explore banking for agriculture',
        },
        {
          name: 'Business Professionals',
          src: 'https://www.bmo.com/main/business/who-we-work-with/professionals/',
          ariaLabel: 'Explore banking for business professionals',
        },
        {
          name: 'Franchise',
          src: 'https://www.bmo.com/main/business/who-we-work-with/franchises',
          ariaLabel: 'Explore banking for franchise',
        },
        {
          name: 'Healthcare',
          src: 'https://www.bmo.com/main/business/who-we-work-with/health-care-professionals',
          ariaLabel: 'Explore banking for healthcare',
        },
        {
          name: 'Not-for-Profit',
          src: 'https://www.bmo.com/main/business/who-we-work-with/not-for-profit',
          ariaLabel: 'Explore banking for not for profit',
        },
        {
          name: 'Transportation',
          src: 'https://commercial.bmo.com/en/ca/industry-expertise/trucking/?ecid=va-US38280SMB4-ATBMO15',
          ariaLabel: 'Explore banking for transportation',
        },
      ],
    },
    {
      title: 'Ways to Bank',
      links: [
        {
          name: 'Overview',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/?icid=tl-FEAT2953BRND4-AJBMOH303',
          ariaLabel: 'Ways to bank at B M O',
        },
        {
          name: 'Register for Online Banking',
          src: 'https://www.bmo.com/online/debitcards/registration/#/terms?icid=tl-FEAT2953BRND4-AJBMOH304',
          ariaLabel: '',
        },
        {
          name: 'Digital Banking',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/digital-banking/?icid=tl-FEAT2953BRND4-AJBMOH305',
          ariaLabel: '',
        },
        {
          name: 'Deposit Money',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/deposit-money/?icid=tl-FEAT2953BRND4-AJBMOH306',
          ariaLabel: '',
        },
        {
          name: 'Request Money',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/request-money/?icid=tl-FEAT2953BRND4-AJBMOH307',
          ariaLabel: '',
        },
        {
          name: 'Transfer Money',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/transfer-money/?icid=tl-FEAT2953BRND4-AJBMOH308',
          ariaLabel: '',
        },
        {
          name: 'Send Money',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/send-money/?icid=tl-FEAT2953BRND4-AJBMOH309',
          ariaLabel: '',
        },
        {
          name: 'Global Money Transfer',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/global-money-transfer/?icid=tl-FEAT2953BRND4-AJBMOH310',
          ariaLabel: '',
        },
        {
          name: 'Pay Bills',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/pay-bills/?icid=tl-FEAT2953BRND4-AJBMOH311',
          ariaLabel: '',
        },
        {
          name: 'BMO Debit Card',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/bmo-debit-mastercard/?icid=tl-FEAT2953BRND4-AJBMOH312',
          ariaLabel: '',
        },
        {
          name: 'Overdraft Protection',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/overdraft-protection/?icid=tl-FEAT2953BRND4-AJBMOH313',
          ariaLabel: '',
        },
        {
          name: 'CRA Direct Deposit',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/cra-direct-deposit/?icid=tl-FEAT2953BRND4-AJBMOH314',
          ariaLabel: '',
        },
        {
          name: 'Digital Demos',
          src: 'https://bmodemos.com/en/home?icid=tl-FEAT2953BRND4-AJBMOH315',
          ariaLabel: '',
        },
        {
          name: 'BMO Alerts',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/alerts/?icid=tl-FEAT2953BRND4-AJBMOH316',
          ariaLabel: '',
        },
      ],
    },
  ];
}
