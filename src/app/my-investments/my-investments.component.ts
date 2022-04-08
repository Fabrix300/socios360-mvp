import { Component, OnInit } from '@angular/core';
import { InvestmentOperation } from '../data/interfaces/investmentOperation';
import { MyInvestmentsService } from './my-investments.service';

@Component({
  selector: 'app-my-investments',
  templateUrl: './my-investments.component.html',
  styleUrls: ['./my-investments.component.css']
})
export class MyInvestmentsComponent implements OnInit {

  userInvestmentOperations: InvestmentOperation[] = [];

  constructor(private myInvestmentsService: MyInvestmentsService) { }

  ngOnInit(): void {
    this.getUserInvestmentOperations();
  }

  getUserInvestmentOperations(): void {
    this.myInvestmentsService.getUserInvestmentOperations(parseInt(sessionStorage.getItem('userId')!)).subscribe(invOps => {
      if(invOps.length > 0) this.userInvestmentOperations = invOps;
      else {}
    });
  }

}
