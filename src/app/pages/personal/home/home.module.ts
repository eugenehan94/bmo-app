import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './home-routing.module';
import { SharedLayoutsModule } from 'src/app/shared/components/layouts/layouts.module';
import { SharedFooterModule } from 'src/app/shared/components/footer/footer.module';
import { SharedNavbarModule } from 'src/app/shared/components/navbar/navbar.module';
// Components
import { HomeComponent } from 'src/app/pages/personal/home/home.component';
import { NavbarComponent } from 'src/app/pages/personal/home/components/navbar/navbar.component';
import { HeroComponent } from 'src/app/pages/personal/home/components/hero/hero.component';
import { ProductsTabsComponent } from 'src/app/pages/personal/home/components/products-tabs/products-tabs.component';
import { DownloadBannerComponent } from 'src/app/pages/personal/home/components/download-banner/download-banner.component';
import { WhereToBeginComponent } from 'src/app/pages/personal/home/components/where-to-begin/where-to-begin.component';
import { PersonalFooterComponent } from 'src/app/pages/personal/home/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProductsTabsComponent,
    DownloadBannerComponent,
    WhereToBeginComponent,
    PersonalFooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedLayoutsModule,
    SharedFooterModule,
    SharedNavbarModule,
  ],
  exports: [
    HomeComponent,
    HeroComponent,
    ProductsTabsComponent,
    DownloadBannerComponent,
    WhereToBeginComponent,
    PersonalFooterComponent,
    NavbarComponent,
  ],
})
export class PersonalHomeModule {}
