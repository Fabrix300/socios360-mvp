import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVESTMENTOPERATIONS } from '../data/database';
import { InvestmentOperation } from '../data/interfaces/investmentOperation';

@Injectable({
  providedIn: 'root'
})
export class MyInvestmentsService {

  constructor() { }

  getUserInvestmentOperations(userId: number): Observable<InvestmentOperation[]> {
    let userInvestments: InvestmentOperation[] = [];
    INVESTMENTOPERATIONS.forEach(invOp => {
      if(invOp.user.id === userId){
        userInvestments.push(invOp);
      }
    });
    return of(userInvestments);
  }
}
