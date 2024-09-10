import { Component, OnInit } from '@angular/core';
import { ExitApplicationDialogComponent } from '../exit-application-dialog/exit-application-dialog.component';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
//ngrx
import { Store } from '@ngrx/store';
import { setScreenSize } from 'src/app/store/app/actions/app.actions';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { PersonalFormService } from './personal-form.service';
@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private router: Router,
    private service: PersonalFormService
  ) {}
  currentScreenSize?: string;
  personalInfoForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      charactersOnlyValidator(),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      charactersOnlyValidator(),
    ]),
  });

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 599.99px)',
        '(min-width: 600px) and (max-width: 1023.99px)',
        '(min-width: 1024px)',
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (this.breakpointObserver.isMatched('(max-width: 599.99px)')) {
          this.store.dispatch(setScreenSize({ screenSize: 'Small' }));
        } else if (
          this.breakpointObserver.isMatched(
            '(min-width: 600px) and (max-width:1024px)'
          )
        ) {
          this.store.dispatch(setScreenSize({ screenSize: 'Medium' }));
        } else {
          this.store.dispatch(setScreenSize({ screenSize: 'Large' }));
        }
      });
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

  get firstName(): any {
    return this.personalInfoForm.get('firstName');
  }
  get lastName(): any {
    return this.personalInfoForm.get('lastName');
  }
  onSubmit() {
    if (this.personalInfoForm.invalid) {
      return;
    }
    const data = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
    };
    this.service.createAccount(data).subscribe({
      next: (res) => {},
      error: (error) => {
        console.error('An error occurred: ', error);
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExitApplicationDialogComponent, {
      // css class located at global styles file
      backdropClass: 'darker-backdrop',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Yes') {
        window.scrollTo(0, 0);
        this.router.navigate(['/']);
      }
    });
  }
}
// Character only validators and also it allows ' and spaces
export function charactersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z' ]+$/.test(control.value);
    return valid ? null : { charactersOnly: { value: control.value } };
  };
}
