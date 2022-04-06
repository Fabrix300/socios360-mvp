import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setContentTopMargin(margin: number): void {
    document.getElementById('content')!.style.marginTop = (margin + 20)+"px";
  }

}
