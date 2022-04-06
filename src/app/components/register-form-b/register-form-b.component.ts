import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from '../../data/interfaces/alert';

import { Toast } from '../../data/interfaces/Toast';
import { User } from '../../data/interfaces/user';

@Component({
  selector: 'app-register-form-b',
  templateUrl: './register-form-b.component.html',
  styleUrls: ['./register-form-b.component.css']
})
export class RegisterFormBComponent implements OnInit {

  @Input() marginTop?: number;
  @Output() registerFormOutput = new EventEmitter<User>();
  //@Output() toastOutput = new EventEmitter<Toast>();

  alertData?: Alert = undefined;
  registerForm: User = <User>{
    id: 0,
    email: '',
    password: '',
    phone: undefined,
    accType: 2,
    investor: undefined,
    business: {
      id: 0,
      representativeNames: '',
      representativeSurnames: '',
      businessName: '',
      businessTradeName: '',
      businessRuc: ''
    },
    created: '',
    updated: ''
  }
  fieldIds: string[] = ['representativeNames', 'representativeSurnames', 'phone', 'email', 'password', 'businessName', 'businessTradeName', 'businessRuc'];
  errors: number[] = [1, 1, 1, 1, 1, 1, 1, 1];
  excludedCodesOfSymbolsAndNumbers: string[] = ['IntlBackslash', 'BracketLeft', 'BracketRight', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad0', 'NumpadDecimal', 'NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'Backquote', 'Backslash', 'Equal', 'Minus', 'Slash', 'Quote', 'Comma', 'Period', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];
  excludedCodesOfSymbols: string[] = ['IntlBackslash', 'BracketLeft', 'BracketRight', 'NumpadDecimal', 'NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'Backquote', 'Backslash', 'Equal', 'Minus', 'Slash', 'Quote', 'Comma', 'Period']

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setComponentMarginTop();
  }

  setComponentMarginTop(): void{
    document.getElementById('register-form-b')?.classList.add('mt-'+this.marginTop);
  };

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

  onSubmit(): void {
    if (this.verifyForm()) {
      this.registerForm.business!.businessRuc = (this.registerForm.business!.businessRuc).toString(); 
      this.registerForm.created = this.formatDate(new Date());
      this.registerForm.updated = this.formatDate(new Date());
      this.registerFormOutput.emit(this.registerForm);
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

  goBackToLogin(): void {
    this.router.navigate(['login']);
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

  allowOnlyText(event: KeyboardEvent, elementId: string): void {
    if(event.code == 'Space'){
      const element = <HTMLInputElement>document.getElementById(elementId);
      if (element.value[element.value.length-1] == ' ' || element.value == '') {
        event.preventDefault();
        return;
      }
    } else {
      if (this.excludedCodesOfSymbolsAndNumbers.indexOf(event.code) > -1){
        event.preventDefault();
        return;
      }
    }
  }

  allowTextAndNumbers(event: KeyboardEvent, elementId: string): void {
    if(event.code == 'Space'){
      event.preventDefault();
    } else {
      if (this.excludedCodesOfSymbols.indexOf(event.code) > -1){
        event.preventDefault();
        return;
      }
    }
  }

  notAloneSpaces(event: KeyboardEvent, elementId: string): void {
    if(event.code == 'Space'){
      const element = <HTMLInputElement>document.getElementById(elementId);
      if (element.value[element.value.length-1] == ' ' || element.value == '') {
        event.preventDefault();
      }
    }
  }

  verifyField(order: number, elementId: string): void {
    const element: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)!;
    const parentElement: HTMLElement = element.parentElement!;
    switch(element?.getAttribute('name')){
      case 'representativeNames': {
        if (element.value.length <= 1){ 
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'Al menos 2 caracteres son requeridos';
          this.errors[order] = 1;
        } else{ 
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'representativeSurnames': {
        if (element.value.length <= 1){ 
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'Al menos 2 caracteres son requeridos';
          this.errors[order] = 1;
        } else{ 
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'phone': {
        if(element.value.length <= 5) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'El teléfono debe tener al menos 6 dígitos';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
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
          parentOfParent.lastElementChild!.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
          this.errors[order] = 1;
        } else {
          parentOfParent.classList.add('success'); parentOfParent.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'businessName': {
        if( element.value.length <= 2 ) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'La razón social debe tener al menos 3 caracteres';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'businessTradeName': {
        if( element.value.length <= 2 ) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'El nombre comercial debe tener al menos 3 caracteres';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'businessRuc': {
        if( element.value.length <= 10 || element.value.length >= 12 ) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'El RUC debe tener 11 dígitos';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
    }
  }

}
