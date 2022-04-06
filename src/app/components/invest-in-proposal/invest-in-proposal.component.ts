import { Component, OnInit } from '@angular/core';
import { InvestmentOffer } from 'src/app/data/interfaces/investmentOffer';
import { InvestmentDetailService } from 'src/app/investment-detail/investment-detail.service';
import { InvestmentOperation } from '../../data/interfaces/investmentOperation';

@Component({
  selector: 'app-invest-in-proposal',
  templateUrl: './invest-in-proposal.component.html',
  styleUrls: ['./invest-in-proposal.component.css']
})
export class InvestInProposalComponent implements OnInit {

  investmentOffer: InvestmentOffer = <InvestmentOffer>{};
  investmentOperation: InvestmentOperation = <InvestmentOperation>{
    id: 0,
    investedAmount: 0.00,
    business: {},
    investmentOffer: {},
    investmentType: {},
    expectedProfit: 0.00,
    operationDate: ''
  };

  constructor(
    private investmentDetailService: InvestmentDetailService,
  ) { }

  ngOnInit(): void {
  }

  // traer la oferta de inversión
  getInvestmentByRouteId(): void {
    const pathElements = window.location.pathname.split('/');
    if (pathElements[1] == 'main' && pathElements[2] == 'investments' && parseInt(pathElements[3])) {
      this.investmentDetailService.getInvestmentById(parseInt(pathElements[3])).subscribe(invOffer => {
        if(invOffer) {
          this.investmentOffer = invOffer;
        } else {
          // error al traer la inversión
        }
      });
    }
  }

  calculateExpectedInput(): void {
    if(!this.investmentOperation.investedAmount || 
      this.investmentOperation.investedAmount === 0.00
    ) {
      this.investmentOperation.expectedProfit = 0.00;
      return;
    }
  }

}