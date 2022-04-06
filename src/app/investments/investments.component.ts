import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
//import { CurrencyType } from '../data/interfaces/currencyType';
import { InvestmentFilters } from '../data/interfaces/investmentFilters';
import { InvestmentOffer } from '../data/interfaces/investmentOffer';
import { InvestmentType } from '../data/interfaces/investmentType';
import { InvestmentsService } from './investments.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  investments: InvestmentOffer[] = [];
  investmentTypes: InvestmentType[] = [];
  investmentFilters: InvestmentFilters = {
    investmentTypes: [],
    investmentrange: { min: 0, max: 100 }
  };
  //currencyTypes: CurrencyType[] = [];

  constructor(private investmentsService: InvestmentsService, private titleService: Title) { }

  ngOnInit(): void {
    this.changeTitle();
    this.getInvestments();
    this.getInvestmentTypes();
    this.investmentFilters.investmentrange.max = this.getHighestFinancingTarget();
    //this.getCurrencyTypes();
  }

  changeTitle(): void {
    this.titleService.setTitle('Inversiones - Socios360');
  }

  getInvestments(): void {
    this.investmentsService.getAllInvestments().subscribe(investments => {
      if (investments) {
        this.investments = investments;
      } else {
        // error
      }
    });
  }

  getInvestmentTypes(): void {
    this.investmentsService.getAllInvestmentTypes().subscribe(invTypes => {
      if(invTypes) {
        this.investmentTypes = invTypes;
      } else {
        //error
      }
    })
  }

  getHighestFinancingTarget(): number {
    let hFTarget = 0;
    this.investmentsService.getHighestFinancingTarget().subscribe(hFT => {
      if (hFT){
        hFTarget = hFT
      } 
    });
    return hFTarget;
  }

  /*getCurrencyTypes(): void {
    this.investmentsService.getAllCurrencyTypes().subscribe(currTypes => {
      if(currTypes) {
        this.currencyTypes = currTypes;
      } else {
        //error
      }
    })
  }*/

  addOrRemoveInvTypeFilter(elementId: string): void {
    const element = <HTMLInputElement>document.getElementById(elementId);
    if(element.checked) this.investmentFilters.investmentTypes.push({name: elementId});
    else {
      const index = this.investmentFilters.investmentTypes.findIndex(h => h.name == elementId);
      this.investmentFilters.investmentTypes.splice(index, 1);
    }
    //this.applyFilters();
  }

  validateRange(elementId: string): void {
    const element = <HTMLInputElement>document.getElementById(elementId);
    if(element.value == '') element.value = '0';
    if(parseFloat(element.value) < 0) element.value = (-1 * parseFloat(element.value)).toString();
    switch (elementId){
      case 'minInput': {
        const maxInput = <HTMLInputElement>document.getElementById('maxInput');
        if(parseFloat(element.value) > parseFloat(maxInput.value)) element.value = maxInput.value;
        break;
      }
      case 'maxInput': {
        const minInput = <HTMLInputElement>document.getElementById('minInput');
        if(parseFloat(element.value) < parseFloat(minInput.value)) element.value = minInput.value;
        break;
      }
    }
  }

  applyFilters(): void {
    this.investmentsService.getAllInvestmentTypesAccordingToFilters(this.investmentFilters).subscribe(investmentsFiltered => {
      if(investmentsFiltered){
        this.investments = investmentsFiltered;
      } else {
        //error
      }
    });
  }

}
