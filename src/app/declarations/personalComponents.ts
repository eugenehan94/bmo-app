// Personal bank account - home
import { HomeComponent } from 'src/app/pages/personal/home/home.component';
import { NavbarComponent } from 'src/app/pages/personal/home/components/navbar/navbar.component';
import { HeroComponent } from 'src/app/pages/personal/home/components/hero/hero.component';
import { ProductsTabsComponent } from 'src/app/pages/personal/home/components/products-tabs/products-tabs.component';
import { DownloadBannerComponent } from 'src/app/pages/personal/home/components/download-banner/download-banner.component';
import { WhereToBeginComponent } from 'src/app/pages/personal/home/components/where-to-begin/where-to-begin.component';
import { PersonalFooterComponent } from 'src/app/pages/personal/home/components/footer/footer.component';
// Bank accounts
import { PersonalBankAccountsMainComponent } from 'src/app/pages/personal/bank-accounts/main/main.component';
import { PersonalBankAccountsOverviewPage } from 'src/app/pages/personal/bank-accounts/overview/overview.component';
import { PersonalBankAccountsOverviewComponent } from 'src/app/pages/personal/bank-accounts/overview/components/overview/overview.component';
import { PersonalBankAccountsFeaturedProductsComponent } from 'src/app/pages/personal/bank-accounts/overview/components/featured-products/featured-products.component';
import { PersonalBankAccountsMultipleAccountsSectionComponent } from 'src/app/pages/personal/bank-accounts/overview/components/multiple-accounts-section/multiple-accounts-section.component';
import { PersonalBankAccountsHelpMeChooseComponent } from 'src/app/pages/personal/bank-accounts/overview/components/help-me-choose/help-me-choose.component';
import { PersonalBankAccountsCheckOutOthersComponent } from 'src/app/pages/personal/bank-accounts/overview/components/check-out-others/check-out-others.component';
import { PersonalBankAccountsReviewsCarouselComponent } from 'src/app/pages/personal/bank-accounts/overview/components/reviews-carousel/reviews-carousel.component';

export const PersonalComponents = [
  HomeComponent,
  NavbarComponent,
  // HeroComponent,
  // ProductsTabsComponent,
  // DownloadBannerComponent,
  // WhereToBeginComponent,
  PersonalFooterComponent,
  PersonalBankAccountsOverviewPage,
  PersonalBankAccountsMainComponent,
  PersonalBankAccountsOverviewComponent,
  PersonalBankAccountsFeaturedProductsComponent,
  PersonalBankAccountsMultipleAccountsSectionComponent,
  PersonalBankAccountsHelpMeChooseComponent,
  PersonalBankAccountsCheckOutOthersComponent,
  PersonalBankAccountsReviewsCarouselComponent
];
