import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVESTMENTOFFERS } from '../data/database';
import { InvestmentOffer } from '../data/interfaces/investmentOffer';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getNewInvestments(): Observable<InvestmentOffer[]> {
    let end: number = 3;
    let newInvestments: InvestmentOffer[] = [];
    if(INVESTMENTOFFERS.length > 2){
      for(let i = (INVESTMENTOFFERS.length - 1); i >= (INVESTMENTOFFERS.length - 3); i--){
        if(end > 0) {
          newInvestments.push(INVESTMENTOFFERS[i]);
          end--;
        } else {
          return of(newInvestments);
        }
      }
    }
    return of(newInvestments);
  }

}
