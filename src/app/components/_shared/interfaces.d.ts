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

//personal hero
export interface HeroBannerOptionsType {
  src: string;
  alt: string;
  title: string;
  description: string;
  linkHref: string;
  linkAriaLabel: string;
  linkName: string;
}

//personal navbar
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
}
export interface MobileBottomNavOptionsType {
  title: string;
  ariaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}
//personal products-tabs
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

//personal where-to-begin
export interface CardContentType {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  linkTitle: string;
  linkSrc: string;
  linkAriaLabel: string;
}

//Personal - bank-accounts - overview
export interface BankAccountDataType {
  text: string;
}

//Business - home page
export interface FooterCaptionsType {
  caption: string;
}

//Business - get-in-touch
export interface ButtonsDataType {
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleParagraph: string;
}

export interface ButtonsDisplayContentsType {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  contactBranch: string;
  contactBranchHref: string;
  contactBranchAriaLabel: string;
  contactNumber?: string;
  contactNumberHref?: string;
  contactNumberAriaLabel?: string;
}
