import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { SharedFooterModule } from 'src/app/shared/components/footer/footer.module';
@NgModule({
  declarations: [GettingStartedComponent, NavbarComponent, GetStartedComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    SharedFooterModule,
    GettingStartedRoutingModule,
  ],
})
export class GettingStartedModule {}
