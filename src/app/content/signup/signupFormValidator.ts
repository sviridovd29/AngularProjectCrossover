import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { User } from "src/app/shared/interface";

export function equalPassValidator (control: AbstractControl): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password === cpassword ? null : {
      'nonEqualPass': 'Password are not equal'
    }
  }

  export function validatorFullName(control: AbstractControl): ValidationErrors | null{
    let value = control.value;
    let pattern = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
    let resultValidator = pattern.test(value);
    if(resultValidator) {
      return null
    } else {
      return {
        fullNameError: 'Необходимо заполнить в формате: Иванов Иван Иванович'
      }
    }
  }

  export function validatorCity(control: AbstractControl){
    let value = control.value;
    let pattern = /^([А-ЯA-Z][а-яa-z]{3,15}$)/;
    let resultValidator = pattern.test(value);
    if(resultValidator) {
      return null
    } else {
      return {
        errorCity: 'Необходимо заполнить в формате: Запорожье'
      }
    }
  }
  
  export function validatorPhone(control: AbstractControl){
    let value = control.value;
    let pattern = /\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/;
    let resultValidator = pattern.test(value);
    if(resultValidator) {
      return null
    } else {
      return {
        errorPhone: 'необходимо соответствие: +38(099)-777-77-77'
      }
    }
  }

  export function validatorName(control: AbstractControl): ValidationErrors | null{
    let value = control.value;
    let pattern = /^([А-ЯA-Z][а-яa-z]{3,15}$)/;
    let resultValidator = pattern.test(value);
    if(resultValidator) {
      return null
    } else {
      return {
        nameError: 'Необходимо заполнить в формате: Дмитрий'
      }
    }
  }
  
  export function validatorEmail(control: AbstractControl){
    let value = control.value;
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultValidator = pattern.test(value);
      if(resultValidator) {
      return null
    } else {
      return {
        emailError: 'Необходимо в формате: ss@ss.com'
        
      }
    }
  }

  export function equalEmailValidator(control: AbstractControl) {
    const arrUsers: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    let equalEmail = arrUsers.some(x => x.userEmail == control.value);
    if( !arrUsers ) {
      return null
    }
    if(!equalEmail) {
      return null
    } else {
      return {
        equalEmailError: 'email is used'
      }
    }
  }

  export function equalNameValidator(control: AbstractControl) {
    const arrUsers: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    let equalName = arrUsers.some(x => x.userName == control.value);
    if( !arrUsers ) {
      return null
    }
    if( !equalName) {
      return null
    } else {
      return {
        equalNameError: 'name is used'
      }
    }
  }