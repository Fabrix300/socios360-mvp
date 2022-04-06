import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../../data/database';
import { LoginForm } from '../../data/interfaces/loginForm';
import { User } from '../../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(loginUser: LoginForm): Observable<User> {
    const user = USERS.find(h => h.email === loginUser.email && h.password === loginUser.password)!;
    return of(user);
  }

}
