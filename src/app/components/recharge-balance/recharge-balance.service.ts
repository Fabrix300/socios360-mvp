import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { getTransactionOperationLastId, setTransactionOperationLastId, TRANSACTIONOPERATIONS, USERS } from '../../data/database';
import { TransactionOperation } from '../../data/interfaces/transactionOperation';
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

  saveTransaction(balanceRecharge: TransactionOperation): Observable<TransactionOperation | undefined> {
    /* setting new id*/
    setTransactionOperationLastId(getTransactionOperationLastId() + 1);
    balanceRecharge.id = getTransactionOperationLastId();
    TRANSACTIONOPERATIONS.push(balanceRecharge);
    return of(TRANSACTIONOPERATIONS.find(h => h.id === balanceRecharge.id));
  }

}