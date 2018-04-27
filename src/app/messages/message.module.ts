import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MessageRoutingModule} from './message-routing.module';
import {MessagesComponent} from './messages.component';
import {MessageComponent} from './message/message.component';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageInputComponent} from './message-input/message-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageRoutingModule
  ],
  declarations: [
    MessagesComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent
  ]
})
export class MessageModule { }
