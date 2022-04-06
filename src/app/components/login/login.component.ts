import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Alert } from '../../data/interfaces/alert';
import { LoginForm } from '../../data/interfaces/loginForm';

import { LoginService } from './login.service';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertData?: Alert = undefined;
  loginForm: LoginForm = {
    email: '',
    password: ''
  };
  fieldIds: string[] = ['email', 'password'];
  errors: number[] = [1, 1];

  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle(): void {
    this.titleService.setTitle('Log in - Socios360');
  }

  showPassword(): void {
    const password = document.getElementById('password');
    const visibility = document.getElementById('visibility');
    const nonVisibility = document.getElementById('non-visibility');
    if (password?.getAttribute('type') == 'password'){
      password.setAttribute('type', 'text');
      visibility?.classList.replace('d-inline', 'd-none');
      nonVisibility?.classList.replace('d-none', 'd-inline')
    } else if (password?.getAttribute('type') == 'text'){
      password.setAttribute('type', 'password');
      visibility?.classList.replace('d-none', 'd-inline');
      nonVisibility?.classList.replace('d-inline', 'd-none')
    }
  }

  onSubmit(): void{
    if(this.verifyForm()) {
      this.loginService.onLogin(this.loginForm).subscribe(user => {
        if(user){
          sessionStorage.setItem('userId', (user.id).toString());
          switch (user.accType){
            case 1: this.router.navigate(['main']); break;
            case 2: this.router.navigate(['business']); break;
          }
        } else{
          this.alertData = {
            classes: 'alert-danger mt-3',
            headerText: 'Error',
            bodyText: 'Sus credenciales son inválidas.'
          };
        }
      });
    } else {
      for(let i = 0; i < this.fieldIds.length; i++) {
        this.verifyField(i, this.fieldIds[i]);
      }
      scrollTo(0,0);
      this.alertData = {
        classes: 'alert-danger mt-3',
        headerText: 'Error',
        bodyText: 'Hay campos con errores en el formulario.'
      };
    }
    
  }

  verifyForm(): boolean {
    let correct = 0;
    for (let error of this.errors) {
      correct += error;
    }
    if(correct == 0) {
      return true;
    }
    return false;
  }

  verifyField(order: number, elementId: string): void {
    const element: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)!;
    const parentElement: HTMLElement = element.parentElement!;
    switch(element?.getAttribute('name')){
      case 'email': {
        if( !(element.value.includes('@') && element.value.includes('.')) ) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'Formato de correo incorrecto';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'password': {
        const parentOfParent: HTMLElement = parentElement.parentElement!;
        if( element.value.length <= 7 ) {
          parentOfParent.classList.add('error'); parentOfParent.classList.remove('success');
          document.getElementById('passwordMessage')!.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
          this.errors[order] = 1;
        } else {
          parentOfParent.classList.add('success'); parentOfParent.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
    }
  }

}
