import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//ngrx
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private store: Store<any>, private http: HttpClient) {}

  currentScreenSize?: string;
  isPasswordVisible: boolean = false;
  isRememberCardSelected: boolean = false;

  ngOnInit(): void {
    this.store.select('screenSizeReducer').subscribe((res) => {
      this.currentScreenSize = res.currentScreenSize;
    });
  }

  signInForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get cardNumber() {
    return this.signInForm.get('cardNumber');
  }
  get password() {
    return this.signInForm.get('password');
  }

  toggleRememberCard(): void {
    this.isRememberCardSelected = !this.isRememberCardSelected;
  }

  togglePasswordVisibility(event: any): void {
    event.preventDefault();
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  onSubmit(): any {
    this.signInForm.controls['cardNumber'].markAsTouched();
    this.signInForm.controls['password'].markAsTouched();

    if (this.password?.valid && this.cardNumber?.valid) {
      this.submitUserSignIn(this.signInForm.value);
    }
  }

  submitUserSignIn(input: any) {
    this.http
      .post('http://localhost:5000/api/v1/sign-in', input, {
        headers: { 'content-type': 'application/json' },
      })
      .subscribe((res) => {
        console.log('Backend response: ', res);
      });
  }
}
