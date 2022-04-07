import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentOffer } from 'src/app/data/interfaces/investmentOffer';
import { InvestmentDetailService } from 'src/app/investment-detail/investment-detail.service';
import { InvestmentOperation } from '../../data/interfaces/investmentOperation';
import { User } from '../../data/interfaces/user';

@Component({
  selector: 'app-invest-in-proposal',
  templateUrl: './invest-in-proposal.component.html',
  styleUrls: ['./invest-in-proposal.component.css']
})
export class InvestInProposalComponent implements OnInit {

  step: number = 1;
  monthlyRate: number = 0.00;
  dailyRate: number = 0.00;
  differenceInDays: number = 0;
  loggedUser: User = <User>{};
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
    private router: Router
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
          this.getUserById();
          this.setDailyRateAndDates(invOffer.annualizedRate);
        } else {
          // error al traer la inversión
        }
      });
    }
  }

  setDailyRateAndDates(annualizedRate: number): void {
    this.monthlyRate = Math.pow((1+annualizedRate), (1/12)) - 1;
    this.dailyRate = Math.pow((1+this.monthlyRate), (1/30)) - 1;
    const endDate: Date = new Date(this.investmentOffer.endDate);
    const nowDate: Date = new Date();
    const differenceInTime = endDate.getTime() - nowDate.getTime();
    this.differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
  }

  getUserById(): void {
    this.investmentDetailService.getUser(parseInt(sessionStorage.getItem('userId')!)).subscribe(user => {
      if(user) {
        this.loggedUser = user;
      } else {
        // error al traer al usuario logueado o no existe
        sessionStorage.removeItem('userId');
        this.router.navigate(['login']);
      }
    });
  }

  calculateExpectedInputAndValidate(): void {
    // Trabajar en la logica de validación del campo
    const investedAmount = <HTMLInputElement>document.getElementById('investedAmount');
    const investedAmountParent = investedAmount.parentElement;
    investedAmountParent!.parentElement!.classList.remove('error');
    if (this.investmentOperation.investedAmount > this.loggedUser.investor!.money) {
      investedAmountParent!.nextElementSibling!.innerHTML = 'Saldo insuficiente';
      investedAmountParent!.parentElement!.classList.add('error');
    } else if (this.investmentOperation.investedAmount == null) {
      investedAmountParent!.nextElementSibling!.innerHTML = 'El monto no debe estar vacío';
      investedAmountParent!.parentElement!.classList.add('error');
    } else if (this.investmentOperation.investedAmount == 0) {
      investedAmountParent!.nextElementSibling!.innerHTML = 'El monto debe ser mayor a 0';
      investedAmountParent!.parentElement!.classList.add('error');
    }
    const expectedProfit: number = (this.investmentOperation.investedAmount * Math.pow((1 + this.dailyRate), this.differenceInDays)) - this.investmentOperation.investedAmount
    this.investmentOperation.expectedProfit = parseFloat(expectedProfit.toFixed(4));
  }

}