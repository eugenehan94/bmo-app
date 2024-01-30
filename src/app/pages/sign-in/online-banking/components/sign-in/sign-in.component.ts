import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private store: Store<any>) {}

  currentScreenSize?: string;
  isPasswordVisible: boolean = false;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

  signInForm = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', Validators.required),
  });

  get cardNumber() {
    return this.signInForm.get('cardNumber');
  }

  get password() {
    return this.signInForm.get('password');
  }

  togglePasswordVisibility(event: any): void {
    event.preventDefault();
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
