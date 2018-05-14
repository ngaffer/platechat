import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import {Message} from './message.model';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.messages.push(message);
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/messages', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages() {
    return this.http.get('http://localhost:3000/messages')
      .map((response: Response) => {
        const messages = response.json().obj;
        let transformedMessage: Message[] = [];
        for (let message of messages) {
          transformedMessage.push(new Message(message.content, message._id, 'dumDateTime', 'null', 'DUM 123', null ));
        }
        this.messages = transformedMessage;
        return transformedMessage;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

}
