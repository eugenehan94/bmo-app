import { FooterContentOneType, FooterContentTwoType } from 'src/app/interfaces';

const footerContentOne: FooterContentOneType[] = [
  {
    href: 'https://www.bmo.com/main/personal/legal/',
    text: 'Legal',
  },
  {
    href: 'https://www.bmo.com/main/about-bmo/privacy-security/our-privacy-code/',
    text: 'Privacy',
  },
  {
    href: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/',
    text: 'Security',
  },
  {
    href: 'https://www.bmo.com/main/about-bmo/accessibility/',
    text: 'Accessibility',
  },
];
const footerContentTwo: FooterContentTwoType[] = [
  {
    href: 'https://www.bmo.com/home/popups/global/cdic',
    text: 'CDIC Member',
  },
];

export default { footerContentOne, footerContentTwo };
