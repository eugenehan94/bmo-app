import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { OnlineBankingUnauthorizedRoutingModule } from './online-banking-unauthorized-routing.module';
import { OnlineBankingUnauthorizedComponent } from './online-banking-unauthorized.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorContentComponent } from './components/error-content/error-content.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    OnlineBankingUnauthorizedComponent,
    NavbarComponent,
    ErrorContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    OnlineBankingUnauthorizedRoutingModule,
  ],
  exports: [OnlineBankingUnauthorizedComponent],
})
export class OnlineBankingUnauthorizedModule {}
