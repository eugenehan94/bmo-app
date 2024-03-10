import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [PersonalInfoComponent, NavbarComponent],
  imports: [CommonModule, PersonalInfoRoutingModule],
})
export class PersonalInfoModule {}
