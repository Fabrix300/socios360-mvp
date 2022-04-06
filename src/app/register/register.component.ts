import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../data/interfaces/user';
import { RegisterService } from './register.service';
import { Title } from '@angular/platform-browser';
import { Toast } from '../data/interfaces/Toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accType: number = 0;
  toastObject?: Toast = undefined;

  constructor(private registerService: RegisterService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle(): void {
    this.titleService.setTitle('Sign up - Socios360');
  }

  setAccType(aT: number): void{
    this.accType = aT;
  }

  saveRegisterForm(registerForm: User): void {
    this.registerService.saveUser(registerForm).subscribe(result => {
      if (result) {
        sessionStorage.setItem('userId', (result.id).toString());
        switch (result.accType) {
          case 1: this.router.navigate(['main']); break;
          case 2: this.router.navigate(['business']); break;
        }
      } else {
        //error
      }
    });
  }

  goBackToLogin(): void {
    this.router.navigate(['login']);
  }

  displayToast(toastInfo: Toast): void {
    this.toastObject = toastInfo;
  }

}
