// footer
export interface CidcDataType {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
}

interface LinksType {
  name: string;
  src: string;
  ariaLabel: string;
}
export interface FooterCategoryLinksType {
  title: string;
  links: LinksType[];
}

export interface FooterSupportLinksType {
  icon: string;
  title: string;
  src: string;
  ariaLabel: string;
}

export interface SocialMediaDataType {
  icon: string;
  ariaLabel: string;
  href: string;
  alt: string;
}

export interface AboutBmoDataType {
  href: string;
  ariaLabel: string;
  text: string;
}

export interface DownloadAppDataType {
  href: string;
  ariaLabel: string;
  imageSrc: string;
  imageAlt: string;
}

export interface HeroBannerOptionsType {
  src: string;
  alt: string;
  title: string;
  description: string;
  linkHref: string;
  linkAriaLabel: string;
  linkName: string;
}

// navbar
export interface SiteOptionsType {
  title: string;
  linkHref?: string;
  ariaLabel?: string;
  routerLink?: string;
}
export interface CountryOptionsType {
  country: string;
  icon: string;
}
export interface SignInMenuOptionsType {
  title: string;
  ariaLabel: string;
  link: string;
}

export interface NavigationOptionsType {
  title: string;
  categories: Categories[];
  resources: Resouces[];
}
interface Categories {
  title?: string;
  link?: string;
  ariaLabel?: string;
  children?: CategoriesChildren[];
}
interface CategoriesChildren {
  link?: string;
  src?: string;
  ariaLabel: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
}
interface Resouces {
  link: string;
  ariaLabel: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
}
export interface MobileBottomNavOptionsType {
  title: string;
  ariaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface TabsType {
  label: string;
  cardData: CardDataType[];
}
interface CardDataType {
  image?: string;
  svg?: string;
  imageAlt?: string;
  svgAlt?: string;
  title: string;
  description: string;
  src: string;
  srcTitle: string;
}


export interface CardContentType {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  linkTitle: string;
  linkSrc: string;
  linkAriaLabel: string;
}



