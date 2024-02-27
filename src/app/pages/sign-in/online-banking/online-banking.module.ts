import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineBankingRoutingModule } from './online-banking-routing.module';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { OnlineBankingComponent } from './online-banking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecurityNoticeComponent } from './components/security-notice/security-notice.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
// Modules
// import { OnlineBankingAuthorizedModule } from '../../authorized/online-banking/online-banking.module';

@NgModule({
  declarations: [
    OnlineBankingComponent,
    NavbarComponent,
    SignInComponent,
    FooterComponent,
    SecurityNoticeComponent,
    RegisterCardComponent,
  ],
  imports: [
    CommonModule,
    OnlineBankingRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    // OnlineBankingAuthorizedModule,
  ],
  exports: [OnlineBankingComponent],
})
export class OnlineBankingModule {}
