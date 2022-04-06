import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USER } from '../data/database';
import { LoginForm } from '../data/interfaces/loginForm';
import { User } from '../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

}
