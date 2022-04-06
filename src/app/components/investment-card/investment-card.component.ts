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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToInvestmentDetail(investmentId: number): void {
    this.router.navigate(['/main/investments', investmentId]);
  }

}
