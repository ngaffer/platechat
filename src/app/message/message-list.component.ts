import { Component, OnInit } from '@angular/core';

import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

	messages: Message[] = [
		new Message('hello this is my content','user id','date and time','mylabel','plate id',''),
		new Message('a different piece of content','user id 2','date and time 2','mylabel','plate id2','')
	];

  constructor() { }

  ngOnInit() {
  }

}
