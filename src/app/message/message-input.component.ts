import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from './message.service';
import { AuthService } from '../auth/auth.service';
import { Message } from './message.model';
import { Plate } from '../auth/plate.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  constructor(private messageService: MessageService) {}
  // constructor(private authService: AuthService) {}

	states: string[] = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusettes','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	
	messageInputForm: FormGroup;
	plateNumber: FormControl;
	plateState: FormControl;
	content: FormControl;

	ngOnInit() {
  	this.createFormControls();
    this.createForm();
  }

  createFormControls() {
  	this.plateNumber = new FormControl('', [
			Validators.required,
			Validators.maxLength(8)
		]);
		this.plateState = new FormControl('', Validators.required);
		this.content = new FormControl('', Validators.required);
  }

  createForm() {
  	this.messageInputForm = new FormGroup({
  		plateNumber: this.plateNumber,
			plateState: this.plateState,
			content: this.content
  	});
  }

  onSubmit() {
  	// const message = new Message(this.messageInputForm.content, 'Max');
   //  const plate = new Plate(this.messageInputForm.plateNumber, this.messageInputForm.plateState, 'Max');
   //  this.messageService.addMessage(message);
    // this.authService.addPlate(plate);
    console.log(this.messageInputForm.value);
  }

}
