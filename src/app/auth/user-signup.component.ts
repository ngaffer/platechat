import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

	signupForm: FormGroup;
	firstName: FormControl;
	lastName: FormControl;
	email: FormControl;
	password: FormControl;

  ngOnInit() {
  	this.createFormControls();
  	this.createForm();
  }

  createFormControls() {
  	this.firstName = new FormControl('', Validators.required);
  	this.lastName = new FormControl('', Validators.required);
  	this.email = new FormControl('', Validators.required);
  	this.password = new FormControl('', Validators.required);
  }

  createForm() {
  	this.signupForm = new FormGroup({
  		firstName: this.firstName,
  		lastName: this.lastName,
  		email: this.email,
  		password: this.password
  	});
  }

  onSignup() {
  	alert('it worked');
  }

}
