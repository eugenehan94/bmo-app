// NOTE: https://stackoverflow.com/questions/58238231/is-it-possible-to-import-the-ngmodule-objects-from-a-separate-file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NOTE: This import houses all our Angular Material imports
import { MaterialDesignModule } from './material-design/material-design.module';
// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
// @NOTE: Refer to 'declaration' folder for specific component imports
// Page imports
import { PagesComponents } from 'src/app/declarations/pagesComponents';
// Layouts
import { LayoutComponents } from 'src/app/declarations/layoutComponents';
// Navbar imports
import { NavbarComponents } from 'src/app/declarations/navbarComponents';
// Personal imports
import { PersonalComponents } from 'src/app/declarations/personalComponents';
// Business
import { BusinessComponents } from 'src/app/declarations/businessComponents';
import { FooterComponent } from './components/_shared/footer/footer.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { NavbarReducer } from './store/app/reducers/app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponents,
    LayoutComponents,
    PersonalComponents,
    BusinessComponents,
    NavbarComponents,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    NgOptimizedImage,
    StoreModule.forRoot({
      navbarReducer: NavbarReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
