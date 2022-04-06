import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from '../../data/interfaces/alert';

import { User } from '../../data/interfaces/user';

@Component({
  selector: 'app-register-form-i',
  templateUrl: './register-form-i.component.html',
  styleUrls: ['./register-form-i.component.css']
})
export class RegisterFormIComponent implements OnInit {

  @Input() marginTop?: number;
  @Output() registerFormOutput = new EventEmitter<User>();

  alertData?: Alert = undefined;
  registerForm: User = <User>{
    id: 0,
    email: '',
    password: '',
    phone: undefined,
    accType: 1,
    investor: {
      id: 0,
      names: '',
      surnames: '',
      dob: '',
      docType: 'DNI',
      docNumber: undefined,
      money: 0
    },
    business: undefined,
    created: '',
    updated: ''
  };
  fieldIds: string[] = ['names', 'surnames', 'phone', 'email', 'password', 'dob', 'docNumber'];
  errors: number[] = [1, 1, 1, 1, 1, 1, 1];
  excludedCodesOfSymbolsAndNumbers: string[] = ['IntlBackslash', 'BracketLeft', 'BracketRight', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad0', 'NumpadDecimal', 'NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'Backquote', 'Backslash', 'Equal', 'Minus', 'Slash', 'Quote', 'Comma', 'Period', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];
  excludedCodesOfSymbols: string[] = ['IntlBackslash', 'BracketLeft', 'BracketRight', 'NumpadDecimal', 'NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'Backquote', 'Backslash', 'Equal', 'Minus', 'Slash', 'Quote', 'Comma', 'Period'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setComponentMarginTop();
  }

  setComponentMarginTop(): void{
    if (this.marginTop != undefined) {
      document.getElementById('register-form-i')?.classList.add('mt-'+this.marginTop);
    }
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

  onSubmit(): void{
    console.log(this.registerForm);
    if (this.verifyForm()) {
      if(this.registerForm.investor!.docType == 'DNI'){
        this.registerForm.investor!.docNumber = this.registerForm.investor!.docNumber!.toString();
      }
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
      // TODO: PONER VALIDACION DE CAMPOS EN EL LOGIN
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

  goBackToLogin(): void {
    this.router.navigate(['login']);
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
      /*const element = <HTMLInputElement>document.getElementById(elementId);
      if (element.value[element.value.length-1] == ' ' || element.value == '') {
        
        return;
      }*/
      event.preventDefault();
    } else {
      if (this.excludedCodesOfSymbols.indexOf(event.code) > -1){
        event.preventDefault();
        return;
      }
    }
  }

  verifyField(order: number, elementId: string): void {
    const element: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)!;
    const parentElement: HTMLElement = element.parentElement!;
    switch(element?.getAttribute('name')){
      case 'names': {
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
      case 'surnames': {
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
          parentElement.lastElementChild!.innerHTML = 'El número telefónico debe tener al menos 6 dígitos';
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
      case 'dob': {
        if( element.value == '' ) {
          parentElement.classList.add('error'); parentElement.classList.remove('success');
          parentElement.lastElementChild!.innerHTML = 'Formato de fecha incorrecto';
          this.errors[order] = 1;
        } else {
          parentElement.classList.add('success'); parentElement.classList.remove('error'); 
          this.errors[order] = 0;
        }
        break;
      }
      case 'docNumber': {
        const docType: string = this.registerForm.investor!.docType;
        switch (docType) {
          case 'DNI': {
            if( element.value.length <= 7 ) {
              parentElement.classList.add('error'); parentElement.classList.remove('success');
              parentElement.lastElementChild!.innerHTML = `El ${docType} debe tener 8 dígitos`;
              this.errors[order] = 1;
            } else {
              parentElement.classList.add('success'); parentElement.classList.remove('error'); 
              this.errors[order] = 0;
            }
            return;
          }
          case 'Pasaporte': {
            if( element.value.length >= 13 ) {
              parentElement.classList.add('error'); parentElement.classList.remove('success');
              parentElement.lastElementChild!.innerHTML = `El ${docType} no debe tener más de 12 dígitos`;
              this.errors[order] = 1;
            } else {
              parentElement.classList.add('success'); parentElement.classList.remove('error'); 
              this.errors[order] = 0;
            }
            return;
          }
          case 'Carnet de Extranjería': {
            if( element.value.length >= 13 ) {
              parentElement.classList.add('error'); parentElement.classList.remove('success');
              parentElement.lastElementChild!.innerHTML = `El ${docType} no debe tener más de 12 dígitos`;
              this.errors[order] = 1;
            } else {
              parentElement.classList.add('success'); parentElement.classList.remove('error'); 
              this.errors[order] = 0;
            }
            return;
          }
        }
        break;
      }
    }
  }

}
