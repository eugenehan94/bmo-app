import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ExitApplicationDialogComponent } from './component/exit-application-dialog/exit-application-dialog.component';
import { ProgressListComponent } from './component/progress-list/progress-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { DisplayImageComponent } from './component/display-image/display-image.component';
import { PersonalFormComponent } from './component/personal-form/personal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../../../shared/material-design/material-design.module';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    NavbarComponent,
    DisplayImageComponent,
    PersonalFormComponent,
    FooterComponent,
    ExitApplicationDialogComponent,
    ProgressListComponent,
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule,
  ],
})
export class PersonalInfoModule {}
