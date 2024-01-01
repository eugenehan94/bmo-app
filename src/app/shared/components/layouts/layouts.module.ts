import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { SharedDownloadBannerComponent } from './download-banner/download-banner.component';
import { SharedHeroComponent } from './hero/hero.component';
import { SharedProductsTabComponent } from './products-tab/products-tab.component';
import { SharedWhereToBeginComponent } from './where-to-begin/where-to-begin.component';

@NgModule({
  declarations: [
    SharedHeroComponent,
    SharedDownloadBannerComponent,
    SharedProductsTabComponent,
    SharedWhereToBeginComponent,
  ],
  imports: [CommonModule, MaterialDesignModule],
  exports: [
    SharedHeroComponent,
    SharedDownloadBannerComponent,
    SharedProductsTabComponent,
    SharedWhereToBeginComponent,
  ],
})
export class SharedLayoutsModule {}
