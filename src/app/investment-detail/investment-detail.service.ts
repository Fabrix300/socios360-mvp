import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { USERS, INVESTMENTOFFERS } from '../data/database';
import { InvestmentOffer } from "../data/interfaces/investmentOffer";
import { User } from "../data/interfaces/user";

@Injectable({
  providedIn: 'root',
})
export class InvestmentDetailService {
  constructor() {}

  getInvestmentById(id: number): Observable<InvestmentOffer | undefined> {
    const investmentOffer = INVESTMENTOFFERS.find((h) => h.id === id);
    return of(investmentOffer);
  }

  getUser(userId: number): Observable<User> {
    const user = USERS.find((h) => h.id === userId)!;
    return of(user);
  }
  
}