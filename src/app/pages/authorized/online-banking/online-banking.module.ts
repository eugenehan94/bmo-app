import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
// Components
import { OnlineBankingAuthorizedComponent } from './online-banking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { UserGreetingComponent } from './components/user-greeting/user-greeting.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';

@NgModule({
  declarations: [
    OnlineBankingAuthorizedComponent,
    NavbarComponent,
    MobileFooterComponent,
    UserGreetingComponent,
    BankAccountsComponent,
  ],
  imports: [CommonModule, MaterialDesignModule],
  exports: [OnlineBankingAuthorizedComponent],
})
export class OnlineBankingAuthorizedModule {}
