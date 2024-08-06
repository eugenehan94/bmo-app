import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatNativeDateModule],
  exports: [
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [NativeDateAdapter],
})
export class MaterialDesignModule {}
