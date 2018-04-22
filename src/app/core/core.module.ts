import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

import { DataService } from '../data.service';
import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message/message.service';
import { MessageComponent } from '../message/message.component';
import { MessageListComponent } from '../message/message-list.component';
import { MessageInputComponent } from '../message/message-input.component';
import { UserSigninComponent } from '../auth/user-signin.component';
import { UserSignupComponent } from '../auth/user-signup.component';
import { UserLogoutComponent } from '../auth/user-logout.component';
import { UserComponent } from '../auth/user.component';
import { HeaderComponent } from '../header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  declarations: [
  	MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserLogoutComponent,
    UserComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent
  ],
  exports: [
  	RouterModule,
  	HeaderComponent
  ],
  providers: [
  	DataService, 
  	AuthService, 
  	MessageService
  ]
})
export class CoreModule { }
