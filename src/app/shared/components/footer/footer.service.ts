import { Injectable } from '@angular/core';
import {
  CidcDataType,
  FooterCategoryLinksType,
  FooterSupportLinksType,
  SocialMediaDataType,
  AboutBmoDataType,
  DownloadAppDataType,
} from '../../../interfaces';
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
