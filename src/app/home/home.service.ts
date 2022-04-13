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

  getMostFundedInvestment(): Observable<InvestmentOffer | undefined> {
    let maxFinancingPercentage: number = 0.00;
    let indexOfMaxFinancingPercentageInvestment: number = 0;
    if(INVESTMENTOFFERS.length > 0){
      for(let i = 0; i < INVESTMENTOFFERS.length; i++){
        const result: number = (INVESTMENTOFFERS[i].currentFinancing/INVESTMENTOFFERS[i].financingTarget);
        if(result >= maxFinancingPercentage) {
          maxFinancingPercentage = result;
          indexOfMaxFinancingPercentageInvestment = i;
        }
      }
      return of(INVESTMENTOFFERS[indexOfMaxFinancingPercentageInvestment]);
    }
    return of(undefined);
  }

  getPopularFactoringInvestments(): Observable<InvestmentOffer[]> {
    let maxAnnualizedRate1: number = 0.00;
    let indexOfMaxAnnualizedRateInvestment1: number = 0;
    let maxAnnualizedRate2: number = 0.00;
    let indexOfMaxAnnualizedRateInvestment2: number = 0;
    let popularFactoringInvestments: InvestmentOffer[] = [];
    for(let i = 0; i < INVESTMENTOFFERS.length; i++){
      if(INVESTMENTOFFERS[i].investmentType.name == 'Factoring') {
        if(INVESTMENTOFFERS[i].annualizedRate >= maxAnnualizedRate1){
          maxAnnualizedRate1 = INVESTMENTOFFERS[i].annualizedRate;
          indexOfMaxAnnualizedRateInvestment1 = i;
        }
      }
    }
    for(let i = 0; i < INVESTMENTOFFERS.length; i++){
      if(INVESTMENTOFFERS[i].investmentType.name == 'Factoring' && i != indexOfMaxAnnualizedRateInvestment1) {
        if(INVESTMENTOFFERS[i].annualizedRate >= maxAnnualizedRate2){
          maxAnnualizedRate2 = INVESTMENTOFFERS[i].annualizedRate;
          indexOfMaxAnnualizedRateInvestment2 = i;
        }
      }
    }
    popularFactoringInvestments.push(INVESTMENTOFFERS[indexOfMaxAnnualizedRateInvestment1]);
    popularFactoringInvestments.push(INVESTMENTOFFERS[indexOfMaxAnnualizedRateInvestment2]);
    return of(popularFactoringInvestments);
  }

}
