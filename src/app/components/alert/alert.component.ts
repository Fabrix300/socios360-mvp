import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../../data/interfaces/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertData?: Alert = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  closeAlert(): void {
    this.alertData = undefined;
  }

}
