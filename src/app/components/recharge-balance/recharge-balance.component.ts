import { Component, OnInit } from '@angular/core';
import { TransactionOperation, TransactionType } from '../../data/interfaces/transactionOperation';
import { DebitCreditCard } from '../../data/interfaces/debitCreditCard';
import { User } from '../../data/interfaces/user';
import { RechargeBalanceService } from './recharge-balance.service';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.css']
})
export class RechargeBalanceComponent implements OnInit {

  loggedUser: User = <User>{};
  balanceRecharge: TransactionOperation = <TransactionOperation>{
    id: 0,
    amount: 0.00,
    operationDate: '',
    transactionType: TransactionType.balanceRecharge,
    user: {}
  };
  debitCreditCard: DebitCreditCard = <DebitCreditCard>{
    cardHolderName: '',
    cardNumber: '',
    cvc: '',
    dueDate: ''
  };
  step: number = 1;
  cardErrors: number[] = [1,1,1,1];

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

  validateRechargeAmount(): void {
    const rechargeAmount = <HTMLInputElement>document.getElementById('rechargeAmount');
    if(this.balanceRecharge.amount == null || this.balanceRecharge.amount == 0.00) {
      rechargeAmount.classList.add('error');
      return;
    }
    rechargeAmount.classList.remove('error');
  }

  validateCardFields(fieldId: string): void {
    switch(fieldId){
      case 'cardHolderName': {
        const cardHolderName = document.getElementById(fieldId);
        if(this.debitCreditCard.cardHolderName == null || this.debitCreditCard.cardHolderName == ''){
          cardHolderName?.classList.add('error');
          this.cardErrors[0] = 1;
          break;
        }
        cardHolderName?.classList.remove('error');
        this.cardErrors[0] = 0;
        break;
      }
      case 'cardNumber': {
        const cardNumber = document.getElementById(fieldId);
        if(this.debitCreditCard.cardNumber == null || this.debitCreditCard.cardNumber == '' || this.debitCreditCard.cardNumber.length < 16){
          cardNumber?.classList.add('error');
          this.cardErrors[1] = 1;
          break;
        }
        cardNumber?.classList.remove('error');
        this.cardErrors[1] = 0;
        break;
      }
      case 'dueDate': {
        const dueDate = document.getElementById(fieldId);
        if(this.debitCreditCard.dueDate == null || this.debitCreditCard.dueDate.length < 5 || !this.debitCreditCard.dueDate.includes('/')){
          dueDate?.classList.add('error');
          this.cardErrors[2] = 1;
          break;
        }
        dueDate?.classList.remove('error');
        this.cardErrors[2] = 0;
        break;
      }
      case 'cvc': {
        const cvc = document.getElementById(fieldId);
        if(this.debitCreditCard.cvc == null || this.debitCreditCard.cvc.length != 3){
          cvc?.classList.add('error');
          this.cardErrors[3] = 1;
          break;
        }
        cvc?.classList.remove('error');
        this.cardErrors[3] = 0;
        break;
      }
    }
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
        let errors: number = 0; /* Validaciones de tarjeta */
        for(let i = 0; i < this.cardErrors.length; i++){
          errors += this.cardErrors[i];
          if(this.cardErrors[i] == 1){
            switch(i) {
              case 0: {
                const cardHolderName = document.getElementById('cardHolderName');
                cardHolderName?.classList.add('error'); break;
              }
              case 1: {
                const cardNumber = document.getElementById('cardNumber');
                cardNumber?.classList.add('error'); break;
              }
              case 2: {
                const dueDate = document.getElementById('dueDate');
                dueDate?.classList.add('error'); break;
              }
              case 3: {
                const cvc = document.getElementById('cvc');
                cvc?.classList.add('error'); break;
              }
            }
          }
        }
        if(errors == 0){
          // Hacer que se guarde como transacción!!!!!!! TODOOOOOOO
          this.balanceRecharge.operationDate = this.formatDate(new Date());
          this.balanceRecharge.user = this.loggedUser;
          this.rechargeBalanceService.saveTransaction(this.balanceRecharge).subscribe(transOp => {
            if(transOp) {
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
            } else {
              //error saving the transaction
              return;
            }
          });
        }
        break;
      }
    }
  }

  formatDate(date: Date): string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  resetRechargeBalanceModal(): void {
    this.balanceRecharge = {
      id: 0,
      amount: 0.00,
      operationDate: '',
      transactionType: TransactionType.balanceRecharge,
      user: <User>{}
    };
    this.debitCreditCard = {
      cardHolderName: '',
      cardNumber: '',
      cvc: '',
      dueDate: ''
    };
    this.cardErrors = [1,1,1,1];
    this.step = 1;
    const progressBar: HTMLElement = document.getElementById('rechargeBalanceProgressBar')!; /* Progress Bar */
    progressBar.classList.remove('w-50'); progressBar.classList.remove('w-100');
    progressBar.classList.add('w-0');
    const stepButtonsList: HTMLCollectionOf<Element> = document.getElementsByClassName('step'); /* Botones step */
    stepButtonsList[1].classList.replace('btn-themePrimary', 'btn-secondary');
    stepButtonsList[2].classList.replace('btn-themePrimary', 'btn-secondary');
  }

}
