import { NavbarComponent } from 'src/app/components/personal/navbar/navbar.component';
import { HeroComponent } from 'src/app/components/personal/hero/hero.component';
import { ProductsTabsComponent } from 'src/app/components/personal/products-tabs/products-tabs.component';
import { DownloadBannerComponent } from 'src/app/components/personal/download-banner/download-banner.component';
import { WhereToBeginComponent } from 'src/app/components/personal/where-to-begin/where-to-begin.component';
import { PersonalFooterComponent } from 'src/app/components/personal/footer/footer.component';
// Bank accounts
import { PersonalBankAccountsMainComponent } from 'src/app/pages/personal/bank-accounts/main/main.component';
import { PersonalBankAccountsOverviewPage } from 'src/app/pages/personal/bank-accounts/overview/overview.component';
import { PersonalBankAccountsOverviewComponent } from 'src/app/components/personal/bank-accounts/overview/overview.component';
import { PersonalBankAccountsFeaturedProductsComponent } from 'src/app/components/personal/bank-accounts/featured-products/featured-products.component';

export const PersonalComponents = [
  NavbarComponent,
  HeroComponent,
  ProductsTabsComponent,
  DownloadBannerComponent,
  WhereToBeginComponent,
  PersonalFooterComponent,
  PersonalBankAccountsOverviewPage,
  PersonalBankAccountsMainComponent,
  PersonalBankAccountsOverviewComponent,
  PersonalBankAccountsFeaturedProductsComponent,
];
