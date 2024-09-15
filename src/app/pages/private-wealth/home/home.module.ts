import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateWealthRoutingModule } from './home-routing.module';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, PrivateWealthRoutingModule, MaterialDesignModule],
})
export class HomeModule {}
