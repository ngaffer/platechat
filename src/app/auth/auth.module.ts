import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';
import {UserComponent} from './user.component';
import {UserSigninComponent} from './signin/user-signin.component';
import {UserSignupComponent} from './signup/user-signup.component';
import {UserLogoutComponent} from './logout/user-logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
