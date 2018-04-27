import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {User} from './user.model';


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post<User>('http://localhost:3000/user', user, httpOptions);
  }

  // addUser(user: User) {

  // }

  // getUser() {
  // 	alert('hello');
  // }

  // addPlate(plate: Plate) {

  // }

}
