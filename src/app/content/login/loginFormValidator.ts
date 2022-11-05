import { AbstractControl, ValidationErrors } from "@angular/forms";
import { User } from "src/app/shared/interface";


export function searchUserValidator (control: AbstractControl): ValidationErrors | null {
  const arrUsers: User[] = JSON.parse(localStorage.getItem('user') || '[]');
  const [userName, password] = Object.values(control.value);

    let searchName = arrUsers.some(x => x.userName == userName);
    let searchPassword = arrUsers.some(x => x.pass.password == password);
    
    if(searchName && searchPassword ) {
      return null
    }  
    if(searchName && !searchPassword ) {
      return {
        passError: 'Пароль введен не правильно'
      }
    } 
    else {
      return {
        searchUserError: 'Пользователь не найден. Проверьте логин и пароль'
      }
    }
}