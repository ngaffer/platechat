import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor(private authService: AuthService) {}

  signupForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  passwordGroup: FormGroup;
  password: FormControl;
  rePassword: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.minLength(5),
      Validators.email,
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(12),
      Validators.required
    ]);
    this.rePassword = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.passwordGroup = new FormGroup({
      password: this.password,
      rePassword: this.rePassword
    }, this.passwordMatchValidator);
    this.signupForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      passwordGroup: this.passwordGroup
    });
    console.log(this.signupForm);
  }

  passwordMatchValidator(passwordGroup: FormGroup) {
    return passwordGroup.get('password').value === passwordGroup.get('rePassword').value
      ? null : {'mismatch': true};
  }

  onSignup() {
    const user = new User(
      this.firstName.value,
      this.lastName.value,
      this.password.value,
      this.email.value
    );
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.signupForm.reset();
  }

}
