import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { equalEmailValidator, equalNameValidator, equalPassValidator, validatorCity, validatorEmail, validatorFullName, validatorName, validatorPhone} from './signupFormValidator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public formSignup: FormGroup = new FormGroup({
    fullUserName: new FormControl('Шевченко Тарас Григорьевич', [Validators.required, validatorFullName]),
    city: new FormControl('Киев', [Validators.required, validatorCity]),
    school: new FormControl('СШ №61', [Validators.required]),
    phone: new FormControl('+38(097)-558-77-77', [Validators.required, validatorPhone]),
    colorTheme: new FormControl('#492727'),
    userName: new FormControl('Dima', [Validators.required, validatorName, equalNameValidator]),
    userEmail: new FormControl('ss@ss.ss', [Validators.required, validatorEmail, equalEmailValidator]),
    pass: new FormGroup({
      password: new FormControl ('1111', [ Validators.required, Validators.minLength(4)]),
      rpassword: new FormControl('1111', [ Validators.required])
    }, 
    {
      validators: [ equalPassValidator]
    } 
    ),
  })



  constructor(public localStorageService: LocalStorageService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form: User): void{
    if (this.formSignup.valid && this.formSignup.status === 'VALID') {
      this.localStorageService.getUsers(form);
      this.router.navigate(['/login'])
      this.formSignup.reset();
    }   
  }


}
