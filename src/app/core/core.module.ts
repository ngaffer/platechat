import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {CoreRoutingModule} from './core-routing.module';
import {DataService} from '../data.service';
import {AuthService} from '../auth/auth.service';
import {MessageService} from '../messages/message.service';
import {HeaderComponent} from './header/header.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';

// TODO: Cleanup HttpModule when old data.service is removed
// TODO: and remove HttpModule from package.json

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
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
