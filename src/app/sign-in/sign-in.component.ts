import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailPattern = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';

  signInForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4)
    ])
  });
  error = '';
  emailInvalid: (boolean | undefined);
  passwordInvalid: (boolean | undefined);
  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.emailInvalid = this.signInForm.get('email')?.hasError('required') || this.signInForm.get('email')?.hasError('email');
    this.passwordInvalid = this.signInForm.get('password')?.hasError('required') || this.signInForm.get('password')?.hasError('minlength');

    if (this.signInForm.invalid) {
      console.log("invalid form");
      this.error = "Invalid email or password";
      return;
    }

    this.error = '';
    this.authService.login(this.signInForm.value.email, this.signInForm.value.password);
  }
}
