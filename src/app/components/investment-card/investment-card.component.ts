import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InvestmentOffer } from '../../data/interfaces/investmentOffer';

@Component({
  selector: 'investment-card',
  templateUrl: './investment-card.component.html',
  styleUrls: ['./investment-card.component.css']
})
export class InvestmentCardComponent implements OnInit {

  @HostBinding('class.col-sm-6') shouldAddClassColSm6: boolean = true;
  @HostBinding('class.mb-3') shouldAddClassMb3: boolean = true;
  @Input() investmentObj?: InvestmentOffer;

  financingPercentage: number = 0.00;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.calculateFinancingPercentage();
  }

  goToInvestmentDetail(investmentId: number): void {
    this.router.navigate(['/main/investments', investmentId]);
  }

  calculateFinancingPercentage(): void {
    if(this.investmentObj) {
      const total: number = this.investmentObj?.financingTarget;
      const current: number = this.investmentObj?.currentFinancing;
      const result: number = (current/total);
      this.financingPercentage = parseFloat((result * 100).toFixed(2));
    }
  }

  formatDateString(date: string): string {
    const dateArr: string[] = date.split('-');
    return dateArr[2]+'-'+dateArr[1]+'-'+dateArr[0];
  }

}
