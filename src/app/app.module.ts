import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/personal/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common'

// NOTE: This import houses all our Angular Material imports
import {MaterialDesignModule} from "./material-design/material-design.module";
import { NavbarComponent } from './components/personal/navbar/navbar.component';
import { HeroComponent } from './components/personal/hero/hero.component';
import { ProductsTabsComponent } from './components/personal/products-tabs/products-tabs.component';
import { DownloadBannerComponent } from './components/personal/download-banner/download-banner.component';
import { WhereToBeginComponent } from './components/personal/where-to-begin/where-to-begin.component';
import { FooterComponent } from './components/_shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ProductsTabsComponent,
    DownloadBannerComponent,
    WhereToBeginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
