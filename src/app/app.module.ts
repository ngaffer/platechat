import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  // declarations: [
  //   AppComponent,
  //   MessageComponent,
  //   MessageListComponent,
  //   MessageInputComponent,
  //   UserSigninComponent,
  //   UserSignupComponent,
  //   UserLogoutComponent,
  //   UserComponent,
  //   HeaderComponent
  // ],
  // imports: [
  //   BrowserModule,
  //   HttpModule,
  //   FormsModule,
  //   ReactiveFormsModule
  // ],
  // providers: [DataService, AuthService, MessageService],
  // bootstrap: [AppComponent]
