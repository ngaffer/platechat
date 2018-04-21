import { Injectable } from '@angular/core';

import { User } from './user.model';
import { Plate } from './plate.model';

@Injectable()
export class AuthService {

  constructor() { }

  addUser(user: User) {

  }

  getUser() {
  	alert('hello');
  }

  addPlate(plate: Plate) {

  }

}
