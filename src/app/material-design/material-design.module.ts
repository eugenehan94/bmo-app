import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
  ],
})
export class MaterialDesignModule {}
