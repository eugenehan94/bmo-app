import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// ngrx
import { StoreModule } from '@ngrx/store';
import {
  NavbarReducer,
  ScreenSizeReducer,
  DesktopInnerNavigationReducer,
} from './store/app/reducers/app.reducer';
// Modules
// This import houses all our Angular Material imports
import { MaterialDesignModule } from './material-design/material-design.module';
import { PersonalHomeModule } from './pages/personal/home/home.module';
import { PersonalBankAccountsMainModule } from './pages/personal/bank-accounts/main/main.module';
import { BusinessHomeModule } from './pages/business/home/home.module';

import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    NgOptimizedImage,
    StoreModule.forRoot({
      navbarReducer: NavbarReducer,
      screenSizeReducer: ScreenSizeReducer,
      desktopInnerNavigationReducer: DesktopInnerNavigationReducer,
    }),

    PersonalHomeModule,
    PersonalBankAccountsMainModule,
    BusinessHomeModule,
    DirectivesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
