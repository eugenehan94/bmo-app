import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule } from './home-routing.module';
import { SharedLayoutsModule } from 'src/app/shared/components/layouts/layouts.module';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { SharedFooterModule } from 'src/app/shared/components/footer/footer.module';
import { SharedNavbarModule } from 'src/app/shared/components/navbar/navbar.module';
// Components
import { BusinessHeroComponent } from './components/hero/hero.component';
import { BusinessProductsTabsComponent } from './components/products-tabs/products-tabs.component';
import { BusinessDownloadBannerComponent } from './components/download-banner/download-banner.component';
import { BusinessWhereToBeginComponent } from './components/where-to-begin/where-to-begin.component';
import { BusinessGetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { BusinessHomeComponent } from './home.component';
import { BusinessFooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    BusinessHeroComponent,
    BusinessProductsTabsComponent,
    BusinessDownloadBannerComponent,
    BusinessWhereToBeginComponent,
    BusinessGetInTouchComponent,
    BusinessFooterComponent,
    NavbarComponent,
    BusinessHomeComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedLayoutsModule,
    MaterialDesignModule,
    SharedFooterModule,
    SharedNavbarModule,
  ],
  exports: [BusinessHeroComponent],
})
export class BusinessHomeModule {}
