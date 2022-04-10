import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INVESTMENTOFFERS, INVESTMENTTYPES, gethighestFinancingTarget } from '../data/database';
import { CurrencyType } from '../data/interfaces/currencyType';
import { InvestmentFilters } from '../data/interfaces/investmentFilters';
import { InvestmentOffer } from '../data/interfaces/investmentOffer';
import { InvestmentType } from '../data/interfaces/investmentType';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor() { }

  getAllInvestments(): Observable<InvestmentOffer[]> {
    //const user = USERS.find(h => h.email === loginUser.email && h.password === loginUser.password)!;
    const investments = INVESTMENTOFFERS;
    return of(investments);
  }

  getAllInvestmentTypes(): Observable<InvestmentType[]> {
    const investmentTypes = INVESTMENTTYPES;
    return of(investmentTypes);
  }

  /*getAllCurrencyTypes(): Observable<CurrencyType[]> {
    const currencyTypes = CURRENCYTYPES;
    return of(currencyTypes);
  }*/

  getHighestFinancingTarget(): Observable<number> {
    return of(gethighestFinancingTarget()[1]);
  }

  getAllInvestmentTypesAccordingToFilters(investmentFilters: InvestmentFilters): Observable<InvestmentOffer[]> {
    let investments: InvestmentOffer[] = INVESTMENTOFFERS;
    if(investmentFilters.investmentTypes.length > 0){
      switch (investmentFilters.investmentTypes.length){
        case 1: {
          investments = investments.filter(i => 
            i.investmentType.name == investmentFilters.investmentTypes[0].name
          );
          break;
        }
        case 2: {
          investments = investments.filter(i => 
            i.investmentType.name == investmentFilters.investmentTypes[0].name ||
            i.investmentType.name == investmentFilters.investmentTypes[1].name
          );
          break;
        }
        case 3: {
          investments = investments.filter(i => 
            i.investmentType.name == investmentFilters.investmentTypes[0].name ||
            i.investmentType.name == investmentFilters.investmentTypes[1].name ||
            i.investmentType.name == investmentFilters.investmentTypes[2].name
          );
          break;
        }
      }
    }
    investments = investments.filter(i => 
      i.financingTarget >= investmentFilters.investmentrange.min && i.financingTarget <= investmentFilters.investmentrange.max
    );
    return of(investments);
  }

}
