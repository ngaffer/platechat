import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } from './user.model';
import { Plate } from './plate.model';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(user: User) {
  	const body = JSON.stringify(user);
  	const headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post('http://localhost:3000/user', body);
  }

  // addUser(user: User) {

  // }

  // getUser() {
  // 	alert('hello');
  // }

  // addPlate(plate: Plate) {

  // }

}
