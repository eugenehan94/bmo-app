import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  signInMenuOptions = [
    {
      text: 'BMO InvestorLine',
      href: 'https://www.bmoinvestorline.com/ILClientWeb/login/DisplayLogin.jsp?refresh=true&amp;lang=E',
      ariaLabel: 'Sign in to B M O Investorline',
    },
    {
      text: 'BMO Nesbitt Burns',
      href: 'https://gateway.bmonesbittburns.com/en/SignIn.html',
      ariaLabel: 'Sign in to B M O Nesbitt Burns',
    },
    {
      text: 'BMO SmartFolio',
      href: 'https://www.bmosmartfolio.com/client/#/signin?lang=en-CA',
      ariaLabel: 'Sign in to B M O SmartFolio',
    },
    {
      text: 'BMO Private Banking',
      href: 'https://www.login.bmoprivatebankinginvestments.com/idp/BMO/?ClientID=WP&/',
      ariaLabel: 'Sign in to B M O Private banking',
    },
    {
      text: 'BMO Credit Card',
      href: 'https://www1.bmo.com/onlinebanking/cgi-bin/netbnx/NBmain?product=5',
      ariaLabel: 'Sign in to B M O credit card',
    },
    {
      text: 'Online Banking for Business',
      href: 'https://www21.bmo.com/?eaiLocaleString=en',
      ariaLabel: 'Sign in online banking for business',
    },
  ];
}
