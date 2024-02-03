import { FooterContentOneType, FooterContentTwoType } from 'src/app/interfaces';

const footerContentOne: FooterContentOneType[] = [
  {
    imageExist: false,
    href: 'https://www.bmo.com/main/personal/legal/',
    text: 'Legal',
  },
  {
    imageExist: false,
    href: 'https://www.bmo.com/main/about-bmo/privacy-security/our-privacy-code/',
    text: 'Privacy',
  },
  {
    imageExist: false,
    href: 'https://www.bmo.com/main/personal/ways-to-bank/security-centre/',
    text: 'Security',
  },
  {
    imageExist: false,
    href: 'https://www.bmo.com/main/about-bmo/accessibility/',
    text: 'Accessibility',
  },
];
const footerContentTwo: FooterContentTwoType[] = [
  {
    imageExist: false,
    href: 'https://www.bmo.com/home/popups/global/cdic',
    text: 'CDIC Member',
  },
];

export default { footerContentOne, footerContentTwo };
