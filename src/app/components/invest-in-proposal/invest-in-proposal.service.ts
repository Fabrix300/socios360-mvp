import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS, INVESTMENTOPERATIONS, getInvestmentOperationLastId, setInvestmentOperationLastId, INVESTMENTOFFERS } from '../../data/database';
import { InvestmentOffer } from '../../data/interfaces/investmentOffer';
import { InvestmentOperation } from '../../data/interfaces/investmentOperation';
import { User } from '../../data/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class InvestInProposalService {

  constructor() { }

  updateUser(user: User): Observable<User | undefined> {
    user.updated = this.formatDate(new Date());
    const indexOfUser = USERS.findIndex(h => h.id === user.id);
    if(indexOfUser > -1) USERS[indexOfUser] = user;
    return of(USERS.find(h => h.id === user.id));
  }

  updateInvestmentOffer(invOffer: InvestmentOffer, user: User): Observable<InvestmentOffer | undefined> {
    invOffer.updated = this.formatDate(new Date());
    const isUserAlreadyBacker = invOffer.backers.findIndex(h => h.id === user.id);
    if(isUserAlreadyBacker == -1) invOffer.backers.push(user);
    const indexOfInvOffer = INVESTMENTOFFERS.findIndex(h => h.id === invOffer.id);
    if(indexOfInvOffer > -1) INVESTMENTOFFERS[indexOfInvOffer] = invOffer;
    return of(INVESTMENTOFFERS.find(h => h.id === invOffer.id));
  }

  createInvestmentOperation(invOperation: InvestmentOperation): Observable<InvestmentOperation | undefined> {
    setInvestmentOperationLastId(getInvestmentOperationLastId() + 1);
    invOperation.id = getInvestmentOperationLastId();
    INVESTMENTOPERATIONS.push(invOperation);
    return of(INVESTMENTOPERATIONS.find(h => h.id === invOperation.id));
  }

  formatDate(date: Date): string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

}
