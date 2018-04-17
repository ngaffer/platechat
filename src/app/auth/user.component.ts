import { Component, OnInit } from '@angular/core';

import { User } from './user.model';
import { Plate } from './plate.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	user: User = new User(
		'Natasha',
		'Gaffer',
		'fakepassword',
		'ngaffer@gmail.com',
		'userid',
		'plateid',
		'5075813719',
		'groupid',
		true,
		true
	);

	plate: Plate = new Plate(
		'MHM123',
		'plateid',
		'Wisconsin',
		'userid'
	);

  constructor() { }

  ngOnInit() {
  }

}
