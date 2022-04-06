import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  //@Output() navBarHeight = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    //this.getNavBarHeight();
  }

  /*getNavBarHeight(){
    this.navBarHeight.emit(document.getElementById('navBar')?.offsetHeight);
  };*/

}
