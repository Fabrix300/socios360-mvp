import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TRANSACTIONOPERATIONS } from '../data/database';
import { TransactionOperation } from '../data/interfaces/transactionOperation';

@Injectable({
  providedIn: 'root'
})
export class MyTransactionsService {

  constructor() { }

  getUserTransactionOperations(userId: number): Observable<TransactionOperation[]> {
    let userTransactions: TransactionOperation[] = [];
    TRANSACTIONOPERATIONS.forEach(transOp => {
      if(transOp.user.id === userId){
        userTransactions.push(transOp);
      }
    });
    return of(userTransactions);
  }

}
