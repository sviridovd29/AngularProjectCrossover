import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/interface';


@Injectable({
  providedIn: 'root'
})
export class BackofficeService {


  public user!: any;
  public control$ = new BehaviorSubject<string>('');
  public controlUser$ = new BehaviorSubject<User | null>(null);


  constructor() {
    this.controlUser$.subscribe((res) => {
      this.user = res;
    })
  }


  public changeColor(colorNew: any): void {
    if (this.user) {
      let userForNewColor = this.user;
      userForNewColor.colorTheme = colorNew;
      this.controlUser$.next(userForNewColor);
      return
    }
  }

}
