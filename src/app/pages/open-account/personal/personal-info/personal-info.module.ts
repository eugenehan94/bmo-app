import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DisplayImageComponent } from './component/display-image/display-image.component';
import { PersonalFormComponent } from './component/personal-form/personal-form.component';

@NgModule({
  declarations: [PersonalInfoComponent, NavbarComponent, DisplayImageComponent, PersonalFormComponent],
  imports: [CommonModule, PersonalInfoRoutingModule],
})
export class PersonalInfoModule {}
