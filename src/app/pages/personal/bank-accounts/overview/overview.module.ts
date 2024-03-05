import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { GettingStartedModule } from '../getting-started/getting-started.module';

import { PersonalBankAccountsOverviewPage } from './overview.component';
import { PersonalBankAccountsCheckOutOthersComponent } from './components/check-out-others/check-out-others.component';
import { PersonalBankAccountsFeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { PersonalBankAccountsHelpMeChooseComponent } from './components/help-me-choose/help-me-choose.component';
import { PersonalBankAccountsMultipleAccountsSectionComponent } from './components/multiple-accounts-section/multiple-accounts-section.component';
import { PersonalBankAccountsOverviewComponent } from './components/overview/overview.component';
import { PersonalBankAccountsReviewsCarouselComponent } from './components/reviews-carousel/reviews-carousel.component';

@NgModule({
  declarations: [
    PersonalBankAccountsOverviewPage,
    PersonalBankAccountsCheckOutOthersComponent,
    PersonalBankAccountsFeaturedProductsComponent,
    PersonalBankAccountsHelpMeChooseComponent,
    PersonalBankAccountsMultipleAccountsSectionComponent,
    PersonalBankAccountsOverviewComponent,
    PersonalBankAccountsReviewsCarouselComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    OverviewRoutingModule,
    GettingStartedModule,
  ],
})
export class OverviewModule {}
