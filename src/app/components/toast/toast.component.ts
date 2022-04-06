import { Component, Input, OnInit } from '@angular/core';
import { Toast } from '../../data/interfaces/Toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() toastObject?: Toast = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
