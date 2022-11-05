import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackofficeService } from '../content/backoffice/backoffice.service';
import { User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public activeUser: any = null;
  public isContent: boolean = false;

  constructor(private backofficeService: BackofficeService,
    private router: Router
  ) { }


  getUsers(form: User) {
    const arrUsers: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    arrUsers.push(form)
    this.saveNewUser(arrUsers)
  }

  saveNewUser(user: User[]) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  //for logIn form responce
  ourUser(formUser: any) {
    const arrUsersAll: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    let ourUser = arrUsersAll.find(value => value.userName == formUser.userName);
    this.activeUser = ourUser;
    if (ourUser) {
      this.backofficeService.controlUser$.next(this.activeUser);
      this.isContent = true;
    }
  }

  // Exit user
  public logOutUser(): void {
    this.activeUser = null;
    this.router.navigate(['/'])
  }

  // For auth Guard
  public isLoggedIn() {
    return new Promise(resolve => {
      resolve(this.isContent)
    })
  }

}
