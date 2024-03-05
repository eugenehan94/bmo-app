import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';
import { GettingStartedComponent } from './getting-started.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@NgModule({
  declarations: [GettingStartedComponent, NavbarComponent, GetStartedComponent],
  imports: [CommonModule, MaterialDesignModule],
})
export class GettingStartedModule {}
