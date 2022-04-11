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
  numbers: number[] = [1,2,3];

  constructor(private titleService: Title, private homeService: HomeService) { }

  ngOnInit(): void {
    this.changeTitle();
    this.getNewInvestments();
  }

  changeTitle(): void {
    this.titleService.setTitle('Inicio - Socios360');
  }

  getNewInvestments(): void {
    this.homeService.getNewInvestments().subscribe(newInvOffers => {
      if(newInvOffers){
        this.newInvOffers = newInvOffers;
        console.log(this.newInvOffers);
      } else {
        // error en traer las ultimas ofertas de inversión
      }
    });
  }

  calculateFinancingPercentage(currentFinancing: number, financingTarget: number): number {
    const result: number = (currentFinancing/financingTarget);
    return parseFloat((result * 100).toFixed(2));
  }

}
