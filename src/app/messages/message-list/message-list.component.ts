import {Component, OnInit} from '@angular/core';

import {Message} from '../message.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(
        // on success we get a message of type Message[] like we configured in the service as transformedMessages
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }

}
