import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalBankAccountRoutingModule } from './main-routing.module';
import { PersonalBankAccountsMainComponent } from './main.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { PersonalHomeModule } from '../../home/home.module';
// Overview
import { PersonalBankAccountsOverviewPage } from '../overview/overview.component';
import { PersonalBankAccountsCheckOutOthersComponent } from '../overview/components/check-out-others/check-out-others.component';
import { PersonalBankAccountsFeaturedProductsComponent } from '../overview/components/featured-products/featured-products.component';
import { PersonalBankAccountsHelpMeChooseComponent } from '../overview/components/help-me-choose/help-me-choose.component';
import { PersonalBankAccountsMultipleAccountsSectionComponent } from '../overview/components/multiple-accounts-section/multiple-accounts-section.component';
import { PersonalBankAccountsOverviewComponent } from '../overview/components/overview/overview.component';
import { PersonalBankAccountsReviewsCarouselComponent } from '../overview/components/reviews-carousel/reviews-carousel.component';

@NgModule({
  declarations: [
    PersonalBankAccountsOverviewPage,
    PersonalBankAccountsMainComponent,
    PersonalBankAccountsCheckOutOthersComponent,
    PersonalBankAccountsFeaturedProductsComponent,
    PersonalBankAccountsHelpMeChooseComponent,
    PersonalBankAccountsMultipleAccountsSectionComponent,
    PersonalBankAccountsOverviewComponent,
    PersonalBankAccountsReviewsCarouselComponent,
  ],
  imports: [
    CommonModule,
    PersonalBankAccountRoutingModule,
    MaterialDesignModule,
    // Using navbar and footer from personal home
    PersonalHomeModule,
  ],
  exports: [
    PersonalBankAccountsOverviewPage,
    PersonalBankAccountsMainComponent,
    PersonalBankAccountsCheckOutOthersComponent,
    PersonalBankAccountsFeaturedProductsComponent,
    PersonalBankAccountsHelpMeChooseComponent,
    PersonalBankAccountsMultipleAccountsSectionComponent,
    PersonalBankAccountsOverviewComponent,
    PersonalBankAccountsReviewsCarouselComponent,
  ],
})
export class PersonalBankAccountsMainModule {}
