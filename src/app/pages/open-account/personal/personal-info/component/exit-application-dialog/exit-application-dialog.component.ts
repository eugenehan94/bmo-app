import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonalFormComponent } from '../personal-form/personal-form.component';
@Component({
  selector: 'app-exit-application-dialog',
  templateUrl: './exit-application-dialog.component.html',
  styleUrl: './exit-application-dialog.component.css',
})
export class ExitApplicationDialogComponent {
  private dialogRef = inject(MatDialogRef<PersonalFormComponent>);
  onYesClick() {
    window.scrollTo(0, 0);
    this.dialogRef.close('Yes');
  }
  onNoClick() {
    this.dialogRef.close('No');
  }
}
