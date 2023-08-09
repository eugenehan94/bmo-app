import { Injectable } from '@angular/core';
import {
  CidcDataType,
  FooterCategoryLinksType,
  FooterSupportLinksType,
  SocialMediaDataType,
  AboutBmoDataType,
  DownloadAppDataType,
} from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  cdicData: CidcDataType[] = [
    {
      href: 'https://www.cdic.ca/your-coverage/list-of-member-institutions/',
      ariaLabel:
        'Canada Deposit Insurance Corporation, opens an external page in a new tab',
      src: 'assets/svg/cdic.svg',
      alt: 'CDIC logo',
    },
    {
      href: 'https://www.cdic.ca/wp-content/uploads/cdic-abbreviated-brochure-en.pdf',
      ariaLabel:
        'Canada Deposit Insurance Corporation protection information (P D F, 64.4 k b), opens an external page in a new tab',
      src: 'assets/svg/cdic-online-badge.svg',
      alt: 'CDIC online badge',
    },
  ];

  footerCategoryLinks: FooterCategoryLinksType[] = [
    {
      title: 'Explore our services',
      links: [
        {
          name: 'Bank Accounts',
          src: 'https://www.bmo.com/main/personal/bank-accounts/?icid=tl-FEAT2953BRND4-AJBMOH288',
          ariaLabel: 'Explore our banking services',
        },
        {
          name: 'Credit Card',
          src: 'https://www.bmo.com/main/personal/credit-cards/?icid=tl-FEAT2953BRND4-AJBMOH289',
          ariaLabel: '',
        },
        {
          name: 'Mortgages',
          src: 'https://www.bmo.com/main/personal/mortgages/?icid=tl-FEAT2953BRND4-AJBMOH290',
          ariaLabel: '',
        },
        {
          name: 'Loans',
          src: 'https://www.bmo.com/main/personal/loans-line-of-credit/?icid=tl-FEAT2953BRND4-AJBMOH291',
          ariaLabel: '',
        },
        {
          name: 'Creditor Insurance',
          src: 'https://www.bmo.com/main/personal/creditor-insurance/?icid=tl-FEAT2953BRND4-AJBMOH293',
          ariaLabel: '',
        },
        {
          name: 'Travel Insurance',
          src: 'https://www.bmo.com/main/personal/travel-services/travel-insurance?icid=tl-FEAT2953BRND4-AJBMOH294',
          ariaLabel: '',
        },
      ],
    },
    {
      title: 'Security Centre',
      links: [
        {
          name: 'How We Protect You',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/?icid=tl-FEAT2953BRND4-AJBMOH295',
          ariaLabel: '',
        },
        {
          name: 'How to Protect Yourself',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/how-to-protect-yourself/?icid=tl-FEAT2953BRND4-AJBMOH296',
          ariaLabel: '',
        },
        {
          name: 'Security Tips',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/security-tips/?icid=tl-FEAT2953BRND4-AJBMOH297',
          ariaLabel: '',
        },
        {
          name: 'Learning Centre',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/learning-centre/?icid=tl-FEAT2953BRND4-AJBMOH298',
          ariaLabel: '',
        },
        {
          name: 'Report Fraud',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/report-fraud/?icid=tl-FEAT2953BRND4-AJBMOH299',
          ariaLabel: '',
        },
        {
          name: 'Report Lost/Stolen Debit Card',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/bmo-debit-mastercard/#persFirstFAQ?icid=tl-FEAT2953BRND4-AJBMOH300',
          ariaLabel: '',
        },
        {
          name: 'Report Lost/Stolen Credit Card',
          src: 'https://www.bmo.com/main/personal/credit-cards/report-lost-stolen-card/?icid=tl-FEAT2953BRND4-AJBMOH301',
          ariaLabel: '',
        },
        {
          name: 'Security Alerts',
          src: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/scam-alerts/?icid=tl-FEAT2953BRND4-AJBMOH302',
          ariaLabel: '',
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

  footerSupportLinks: FooterSupportLinksType[] = [
    {
      icon: 'assets/svg/person-headset-white.svg',
      title: 'Customer Support',
      src: 'https://www.bmo.com/main/contact-us/?icid=tl-FEAT2953BRND4-AJBMOH346',
      ariaLabel: 'Contact BMO customer support',
    },
    {
      icon: 'assets/svg/locator-white.svg',
      title: 'Branch Locator',
      src: 'https://branchlocator.bmo.com/?icid=tl-FEAT2953BRND4-AJBMOH347',
      ariaLabel: 'Use our BMO branch locator tool',
    },
    {
      icon: 'assets/svg/calendar-white.svg',
      title: 'Book An Appointment',
      src: 'https://www.bmo.com/oab/start?_lang=en',
      ariaLabel: '',
    },
  ];
  socialMediaData: SocialMediaDataType[] = [
    {
      icon: 'assets/svg/youtube-white.svg',
      ariaLabel:
        'Visit our B M O YouTube page, opens an external page in a new tab',
      href: 'https://www.youtube.com/bmocommunity',
      alt: 'Youtube',
    },
    {
      icon: 'assets/svg/twitter-white.svg',
      ariaLabel:
        'Visit our B M O Twitter page, opens an external page in a new tab',
      href: 'https://twitter.com/BMO',
      alt: 'Twitter',
    },
    {
      icon: 'assets/svg/facebook-white.svg',
      ariaLabel:
        'Visit our B M O Facebook page, opens an external page in a new tab',
      href: 'https://www.facebook.com/BMOcommunity/',
      alt: 'Facebook',
    },
    {
      icon: 'assets/svg/linkedin-white.svg',
      ariaLabel:
        'Visit our B M O LinkedIn page, opens an external page in a new tab',
      href: 'https://www.linkedin.com/company/bank-of-montreal',
      alt: 'Linkedin',
    },
    {
      icon: 'assets/svg/instagram-white.svg',
      ariaLabel:
        'Visit our B M O Instagram page, opens an external page in a new tab',
      href: 'https://www.instagram.com/bmocanada/',
      alt: 'Instagram',
    },
  ];

  aboutBmoData: AboutBmoDataType[] = [
    {
      href: 'https://www.bmo.com/main/about-bmo/?icid=tl-FEAT2953BRND4-AJBMOH348',
      ariaLabel: 'About BMO',
      text: 'About BMO',
    },
    {
      href: 'https://www.bmo.com/main/about-bmo/banking/investor-relations/home?icid=tl-FEAT2953BRND4-AJBMOH350',
      ariaLabel: 'Investor Relations',
      text: 'Investor Relations',
    },
    {
      href: 'https://www.bmo.com/main/about-bmo/privacy-security/our-privacy-code/?icid=tl-FEAT2953BRND4-AJBMOH351',
      ariaLabel: 'Privacy',
      text: 'Privacy',
    },
    {
      href: 'https://www.bmo.com/main/personal/legal/?icid=tl-FEAT2953BRND4-AJBMOH352',
      ariaLabel: 'Legal',
      text: 'Legal',
    },
    {
      href: 'https://www.bmo.com/pdfs/bmo_statement_against_modern_slavery_and_human_trafficking.pdf',
      ariaLabel: 'Modern Slavery Act Statement',
      text: 'Modern Slavery Act Statement',
    },
    {
      href: 'https://jobs.bmo.com/ca/en?icid=tl-FEAT2953BRND4-AJBMOH354',
      ariaLabel: 'Careers',
      text: 'Careers',
    },
    {
      href: 'https://www.bmo.com/main/about-bmo/accessibility/?icid=tl-FEAT2953BRND4-AJBMOH355',
      ariaLabel: 'Accessibility at BMO',
      text: 'Accessibility at BMO',
    },
    {
      href: 'https://www.bmo.com/main/about-bmo/accessibility/?icid=tl-FEAT2953BRND4-AJBMOH416#persSupportSection',
      ariaLabel: 'Accessibility Feedback',
      text: 'Accessibility Feedback',
    },
    {
      href: 'https://www.bmo.com/main/sitemap?icid=tl-FEAT2953BRND4-AJBMOH356',
      ariaLabel: 'Site map',
      text: 'Site map',
    },
    {
      href: 'https://www.bmo.com/main/about-bmo/complaint-handling-process?icid=tl-FEAT2953BRND4-AJBMOH418',
      ariaLabel: 'Customer Complaint Handling Process',
      text: 'Customer Complaint Handling Process',
    },
  ];
  downloadAppData: DownloadAppDataType[] = [
    {
      href: 'https://apps.apple.com/ca/app/bmo-mobile-banking/id429080319',
      ariaLabel:
        'Click to download BMO mobile banking app on Apple Store, opens in a new tab',
      imageSrc: 'assets/svg/apple-app-btn.svg',
      imageAlt: 'Download apple app',
    },
    {
      href: 'https://play.google.com/store/apps/details?id=com.bmo.mobile',
      ariaLabel:
        'Click to download BMO mobile banking app on Google Play store, opens in a new tab',
      imageSrc: 'assets/svg/google-app-btn.svg',
      imageAlt: 'Download google app',
    },
  ];
}
