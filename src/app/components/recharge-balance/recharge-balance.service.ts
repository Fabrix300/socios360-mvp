import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USERS } from '../../data/database';
import { User } from '../../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RechargeBalanceService {

  constructor() { }

  getUser(userId: number): Observable<User> {
    const user = USERS.find(h => h.id === userId)!;
    return of(user);
  }

  addUserMoney(userId:number, amount: number): Observable<User> {
    const userIndex = USERS.findIndex(h => h.id === userId)!;
    USERS[userIndex].investor!.money += amount;
    return of(USERS[userIndex]);
  }

}
