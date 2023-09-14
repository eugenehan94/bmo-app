// NOTE: https://stackoverflow.com/questions/58238231/is-it-possible-to-import-the-ngmodule-objects-from-a-separate-file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NOTE: This import houses all our Angular Material imports
import { MaterialDesignModule } from './material-design/material-design.module';
// https://angular.io/guide/image-directive
import { NgOptimizedImage } from '@angular/common';
// A service with all shared data - no need for prop drilling
import { AppService } from './app.service';
import { AppComponent } from './app.component';
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
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
