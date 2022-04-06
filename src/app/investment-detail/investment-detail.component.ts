import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentOffer } from '../data/interfaces/investmentOffer';
import { User } from '../data/interfaces/user';
import { MainService } from '../main/main.service';
import { InvestmentDetailService } from './investment-detail.service';

@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.css']
})
export class InvestmentDetailComponent implements OnInit {

  investmentOffer: InvestmentOffer = <InvestmentOffer>{}
  loggedUser: User = <User>{};
  i: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private investmentDetailService: InvestmentDetailService,
    private router: Router,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.changeTitle();
    //this.getLoggedUser();
    this.getInvestmentByRouteId();
    this.setWindowScrollEventListener(this.i);
  }

  /*getLoggedUser(): void {
    this.mainService.getUser(parseInt(sessionStorage.getItem('userId')!)).subscribe(user => {
      if(user) {
        this.loggedUser = user;
      } else {
        // no existe usuario logueado
        sessionStorage.removeItem('userId');
      }
    });
  }*/

  changeTitle(): void {
    this.titleService.setTitle('Detalles - Socios360');
  }

  getInvestmentByRouteId(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.investmentDetailService.
      getInvestmentById(parseInt(paramMap.get('investmentId')!)).subscribe( invOffer => {
        if(invOffer) {
          this.investmentOffer = invOffer;
          this.calculateCurrentFinancing(this.investmentOffer);
        } else {
          this.router.navigate(['**']);
        }
      });
    });
  }

  setWindowScrollEventListener(i: number): void {
    window.onscroll = function() {
      const investButton1 = document.getElementById('investButton1');
      if(investButton1!.getBoundingClientRect().top > 0 && i == 0){
        console.log("arriba del boton");
        i = 1;
      } else if(investButton1!.getBoundingClientRect().top <= 0 && investButton1!.getBoundingClientRect().bottom >= 0 && i==1) {
        console.log("en el boton");
        i = 2;
      } else if(investButton1!.getBoundingClientRect().bottom < 0 && i == 2) {
        console.log("debajo del boton");
        i = 0;
      }
    }
  }

  calculateCurrentFinancing(investmentOffer: InvestmentOffer): void {
    const financingIndicator = document.getElementById('financingIndicator');
    const financingPercentage = document.getElementById('financingPercentage');
    const total: number = investmentOffer.financingTarget;
    const current: number = investmentOffer.currentFinancing;
    const result: number = (current/total);
    if(result >= 1) {
      financingIndicator!.style.width = '100%';
      return;
    } else if (result >= 0.99) {
      financingIndicator!.style.borderRadius = '5px 5px 5px 5px';
    }
    financingIndicator!.style.width = (result*100)+'%';
    financingPercentage!.firstElementChild!.innerHTML = ((result * 100).toFixed(2)).toString() + "%";
  }

  countListElements(list: any): number {
    return list.length;
  }

  formatDate(date: string): string {
    const dobArr = new Date(date).toDateString().split(' ');
    return dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
  }

  showInvestInProposalModal(): void {
    document.getElementById('btn-showInvestInProposalModal')?.click();
    document.getElementById('getInvestmentFunctionButton')?.click();
  }

}
