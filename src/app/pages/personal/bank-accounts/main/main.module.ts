import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalBankAccountRoutingModule } from './main-routing.module';
import { PersonalBankAccountsMainComponent } from './main.component';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { PersonalHomeModule } from '../../home/home.module';
// Overview

import { OverviewModule } from '../overview/overview.module';

@NgModule({
  declarations: [PersonalBankAccountsMainComponent],
  imports: [
    CommonModule,
    PersonalBankAccountRoutingModule,
    MaterialDesignModule,
    OverviewModule,
    // Using navbar and footer from personal home
    PersonalHomeModule,
  ],
})
export class PersonalBankAccountsMainModule {}
