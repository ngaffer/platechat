import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { UserComponent } from './user.component';
import { UserSigninComponent } from './user-signin.component';
import { UserSignupComponent } from './user-signup.component';
import { UserLogoutComponent } from './user-logout.component';

@NgModule({
	imports: [
		CommonModule,
		AuthRoutingModule,
		ReactiveFormsModule
	],
	declarations: [
		UserComponent,
		UserSigninComponent,
	  UserSignupComponent,
	  UserLogoutComponent
	]
})
export class AuthModule {

}