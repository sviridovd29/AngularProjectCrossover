import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { BackofficeService } from '../backoffice/backoffice.service';
import { searchUserValidator } from './loginFormValidator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


public formLogin: FormGroup = new FormGroup({
  userName: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
}, 
{
  validators: [searchUserValidator]
} 
)

  constructor( public localStorageService: LocalStorageService,
    public backofficeService: BackofficeService,
    private router: Router) { }

  ngOnInit(): void {
  }

 public logUser(form: User): void {
  if (this.formLogin.valid && this.formLogin.status === 'VALID') {
    this.localStorageService.ourUser(form);
    this.formLogin.reset()
    this.router.navigate(['/back'])
  }}


}
