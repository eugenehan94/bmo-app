// NOTE: https://stackoverflow.com/questions/58238231/is-it-possible-to-import-the-ngmodule-objects-from-a-separate-file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// NOTE: This import houses all our Angular Material imports
import { MaterialDesignModule } from './material-design/material-design.module';
// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
// @NOTE: Refer to 'declaration' folder for specific component imports
// Page imports
import { PagesComponents } from 'src/app/declarations/pagesComponents';
// Navbar imports
import { NavbarComponents } from 'src/app/declarations/navbarComponents';
// Personal imports
import { PersonalComponents } from 'src/app/declarations/personalComponents';
// Business
import { BusinessComponents } from 'src/app/declarations/businessComponents';

// ngrx
import { StoreModule } from '@ngrx/store';
import {
  NavbarReducer,
  ScreenSizeReducer,
  DesktopInnerNavigationReducer,
} from './store/app/reducers/app.reducer';
// Modules
import { PersonalHomeModule } from './pages/personal/home/home.module';
import { SharedLayoutsModule } from './shared/components/layouts/layouts.module';
import { SharedFooterModule } from './shared/components/footer/footer.module';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponents,
    PersonalComponents,
    BusinessComponents,
    NavbarComponents,
    // FooterComponent,
  ],
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
    SharedLayoutsModule,
    PersonalHomeModule,
    SharedFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
