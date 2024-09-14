import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateWealthRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PrivateWealthRoutingModule],
})
export class HomeModule {}
