import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USERS } from '../data/database';
import { User } from '../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {}

  getUser(userId: number): Observable<User> {
    const user = USERS.find(h => h.id === userId)!;
    return of(user);
  }

}
