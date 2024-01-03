import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineBankingRoutingModule } from './online-banking-routing.module';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
// Components
import { OnlineBankingComponent } from './online-banking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [OnlineBankingComponent, NavbarComponent, SignInComponent],
  imports: [CommonModule, OnlineBankingRoutingModule, MaterialDesignModule],
  exports: [OnlineBankingComponent],
})
export class OnlineBankingModule {}
