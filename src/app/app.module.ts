import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MessageInputComponent } from './message/message-input.component';
import { UserSigninComponent } from './auth/user-signin.component';
import { UserSignupComponent } from './auth/user-signup.component';
import { UserLogoutComponent } from './auth/user-logout.component';
import { UserComponent } from './auth/user.component';
import { HeaderComponent } from './header.component';
import { AuthService } from './auth/auth.service';
import { MessageService } from './message/message.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserLogoutComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, AuthService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
