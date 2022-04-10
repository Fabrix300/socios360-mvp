import { Component, OnInit } from '@angular/core';

import { TransactionOperation, TransactionType } from '../data/interfaces/transactionOperation';
import { MyTransactionsService } from './my-transactions.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  userTransactionOperations: TransactionOperation[] = [];

  constructor(private myTransactionsService :MyTransactionsService) { }

  ngOnInit(): void {
    this.getUserTransactionOperations();
  }

  getUserTransactionOperations(): void {
    this.myTransactionsService.getUserTransactionOperations(parseInt(sessionStorage.getItem('userId')!)).subscribe(transOps => {
      if(transOps.length > 0) this.userTransactionOperations = transOps;
      else {}
    });
  }

  formatTransactionType(transType: TransactionType): string {
    switch(transType){
      case 0: return 'Recarga de saldo ';
      case 1: return 'Ingreso ';
      case 2: return 'Egreso ';
    }
    return 'Desconocido';
  }

  formatDateString(date: string): string {
    const dateArr: string[] = date.split('-');
    return dateArr[2]+'-'+dateArr[1]+'-'+dateArr[0];
  }

}
