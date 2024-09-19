import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateWealthRoutingModule } from './home-routing.module';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { NavbarMediumComponent } from './components/navbar-medium/navbar-medium.component';
import { NavbarLargeComponent } from './components/navbar-large/navbar-large.component';
import { SiteSelectorComponent } from './components/site-selector/site-selector.component';
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavbarMobileComponent,
    NavbarMediumComponent,
    NavbarLargeComponent,
    SiteSelectorComponent,
  ],
  imports: [CommonModule, PrivateWealthRoutingModule, MaterialDesignModule],
})
export class HomeModule {}
