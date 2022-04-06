import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USERS, addToUserLastId, getUserLastId, addToBusinessLastId, getBusinessLastId, addToInvestorLastId, getInvestorLastId } from '../data/database';
import { User } from '../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  saveUser(userToRegister: User): Observable<User|undefined> {
    addToUserLastId(1);
    userToRegister.id = getUserLastId();
    if(userToRegister.accType == 1) {
      addToInvestorLastId(1);
      userToRegister.investor!.id = getInvestorLastId();
    } else if(userToRegister.accType == 2) {
      addToBusinessLastId(1);
      userToRegister.business!.id = getBusinessLastId();
    }
    USERS.push(userToRegister);
    return of(USERS.find(h => h.id === userToRegister.id));
  }

}
