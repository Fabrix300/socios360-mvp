import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InvestmentOffer } from '../data/interfaces/investmentOffer';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newInvOffers: InvestmentOffer[] = [];
  mostFundedInvestment: InvestmentOffer = <InvestmentOffer>{};

  constructor(private titleService: Title, private homeService: HomeService) { }

  ngOnInit(): void {
    this.changeTitle();
    this.getNewInvestments();
    this.getMostFundedInvestment();
  }

  changeTitle(): void {
    this.titleService.setTitle('Inicio - Socios360');
  }

  getNewInvestments(): void {
    this.homeService.getNewInvestments().subscribe(newInvOffers => {
      if(newInvOffers){
        this.newInvOffers = newInvOffers;
      } else {
        // error en traer las ultimas ofertas de inversión
      }
    });
  }

  calculateFinancingPercentage(currentFinancing: number, financingTarget: number): number {
    const result: number = (currentFinancing/financingTarget);
    return parseFloat((result * 100).toFixed(2));
  }

  getMostFundedInvestment(): void {
    this.homeService.getMostFundedInvestment().subscribe(mostFundedInvestment => {
      if(mostFundedInvestment) {
        this.mostFundedInvestment = mostFundedInvestment;
      }
    });
  }

}
