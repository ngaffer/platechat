import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { User } from '../user.model';
import { AuthService } from '../auth.service';


function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email && email.indexOf("@") != -1) {
    let [_, domain] = email.split("@");
    if (domain !== "codecraft.tv") {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null;
}

// function passwordMatchValidator(control: FormControl) {
//   let control = control.value;
//   console.log(control);
//   return null;
// }


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
      Validators.required, 
      Validators.pattern("[^ @]*@[^ @]*"),
      emailDomainValidator
    ]);
  	this.password = new FormControl('', [
      Validators.minLength(8), 
      Validators.required
    ]);
    this.rePassword = new FormControl('', [
      Validators.required,
      // passwordMatchValidator
    ]);
  }

  createForm() {
  	this.signupForm = new FormGroup({
  		firstName: this.firstName,
  		lastName: this.lastName,
  		email: this.email,
      password: this.password,
      rePassword: this.rePassword
  	});
  }

  onSubmit() {
  	const user = new User(
      this.firstName.value,
      this.lastName.value,
      this.password.value,
      this.email.value
    );
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
