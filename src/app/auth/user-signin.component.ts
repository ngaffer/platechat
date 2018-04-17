import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

	signinForm: FormGroup;
	email: FormControl;
	password: FormControl;
  
  ngOnInit() {
  	this.createFormControls();
    this.createForm();
  }

  createFormControls() {
  	this.email = new FormControl('', Validators.required);
  	this.password = new FormControl('', Validators.required);
  }

  createForm() {
  	this.signinForm = new FormGroup({
  		email: this.email,
  		password: this.password
  	});
  }

  onSignin() {
    alert('it worked');
  }

}
