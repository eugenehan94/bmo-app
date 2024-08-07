import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { AuthorizedOnlineBankingRoutingModule } from './online-banking-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { OnlineBankingAuthorizedComponent } from './online-banking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { UserGreetingComponent } from './components/user-greeting/user-greeting.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { LoansAndMortgagesComponent } from './components/loans-and-mortgages/loans-and-mortgages.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
// Pages
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountTransferComponent } from './pages/account-transfer/account-transfer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { TransferConfirmationDialogComponent } from './components/transfer-confirmation-dialog/transfer-confirmation-dialog.component';

@NgModule({
  declarations: [
    OnlineBankingAuthorizedComponent,
    NavbarComponent,
    MobileFooterComponent,
    UserGreetingComponent,
    BankAccountsComponent,
    CreditCardsComponent,
    LoansAndMortgagesComponent,
    InvestmentsComponent,
    QuickLinksComponent,
    AccountsComponent,
    AccountTransferComponent,
    SideNavComponent,
    TransferConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AuthorizedOnlineBankingRoutingModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [OnlineBankingAuthorizedComponent],
})
export class OnlineBankingAuthorizedModule {}
