import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../../main/main.service';

import { User } from '../../data/interfaces/user';


@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  @Output() navBarHeight = new EventEmitter<number>();
 // @Output() showRechargeBalanceModal = new EventEmitter();

  userJSON: User = <User>{};
  displayName: string = 'No user';

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.getNavBarHeight();
    this.setLogedUserName();
  }

  getNavBarHeight(): void {
    this.navBarHeight.emit(document.getElementById('navBar')?.offsetHeight);
  };

  setLogedUserName(): void {
    this.mainService.getUser(parseInt(sessionStorage.getItem('userId')!)).subscribe(user => {
      if(user) {
        this.userJSON = user;
        switch (this.userJSON.accType) {
          case 1: this.displayName = this.userJSON.investor!.names; break;
          case 2: this.displayName = this.userJSON.business!.representativeNames; break;
        }
      } else { 
        sessionStorage.removeItem('userId');
        this.router.navigate(['login']);
      }
    });
  }

  logOut(): void {
    sessionStorage.removeItem('userId');
    this.router.navigate(['']);
  }

  showRechargeBalanceModal(): void {
    //this.showRechargeBalanceModal.emit();
    document.getElementById('btn-showBalanceRechargeModal')?.click();
  }

}
