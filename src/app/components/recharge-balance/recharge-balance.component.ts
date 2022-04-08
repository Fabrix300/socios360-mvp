import { Component, OnInit } from '@angular/core';
import { BalanceRecharge } from '../../data/interfaces/balanceRecharge';
import { User } from '../../data/interfaces/user';
import { RechargeBalanceService } from './recharge-balance.service';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.css']
})
export class RechargeBalanceComponent implements OnInit {

  loggedUser: User = <User>{};
  balanceRecharge: BalanceRecharge = <BalanceRecharge>{
    amount: 0.00,
    cardHolderName: '',
    cardNumber: '',
    dueDate: '',
    cvc: '',
    operationDate: '',
    user: this.loggedUser
  };
  step: number = 1;

  constructor(private rechargeBalanceService: RechargeBalanceService) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser(): void {
    this.rechargeBalanceService.getUser(parseInt(sessionStorage.getItem('userId')!)).subscribe(user => {
      if(user) {
        this.loggedUser = user;
      } else {
        sessionStorage.removeItem('userId');
      }
    });
  }

  goBack(): void {
    this.step -= 1;
  }

  advance(): void {
    const progressBar: HTMLElement = document.getElementById('rechargeBalanceProgressBar')!; /* Progress Bar */
    const stepButtonsList: HTMLCollectionOf<Element> = document.getElementsByClassName('step'); /* Botones step */
    switch(this.step) {
      case 1: {
        const rechargeAmount = <HTMLInputElement>document.getElementById('rechargeAmount');
        if(this.balanceRecharge.amount == null || this.balanceRecharge.amount == 0.00){
          rechargeAmount.classList.add('error');
          return;
        } else {
          rechargeAmount.classList.remove('error');
        }
        progressBar.classList.replace('w-0', 'w-50');
        stepButtonsList[1].classList.replace('btn-secondary', 'btn-themePrimary');
        this.step += 1;
        break;
      }
      case 2: {
        // AGREGAR VALIDACIONES DE TARJETA!!
        this.rechargeBalanceService.addUserMoney(parseInt(sessionStorage.getItem('userId')!), this.balanceRecharge.amount).subscribe(userUpdated => {
          if(userUpdated) {
            this.loggedUser = userUpdated;
            progressBar.classList.replace('w-50', 'w-100');
            stepButtonsList[2].classList.replace('btn-secondary', 'btn-themePrimary');
            this.step += 1;
          } else {
            // update error
            return;
          }
        });
        break;
      }
    }
  }

  resetRechargeBalanceModal(): void {
    this.balanceRecharge = {
      amount: 0.00,
      cardHolderName: '',
      cardNumber: '',
      dueDate: '',
      cvc: '',
      operationDate: '',
      user: this.loggedUser
    };
    this.step = 1;
    const progressBar: HTMLElement = document.getElementById('rechargeBalanceProgressBar')!; /* Progress Bar */
    progressBar.classList.remove('w-50'); progressBar.classList.remove('w-100');
    progressBar.classList.add('w-0');
    const stepButtonsList: HTMLCollectionOf<Element> = document.getElementsByClassName('step'); /* Botones step */
    stepButtonsList[1].classList.replace('btn-themePrimary', 'btn-secondary');
    stepButtonsList[2].classList.replace('btn-themePrimary', 'btn-secondary');
  }

}
