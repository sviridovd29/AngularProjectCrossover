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
    fullUserName: new FormControl('', [Validators.required, validatorFullName]),
    city: new FormControl('', [Validators.required, validatorCity]),
    school: new FormControl('', [Validators.required]),
    phone: new FormControl('+38(09', [Validators.required, validatorPhone]),
    colorTheme: new FormControl('#492727'),
    userName: new FormControl('', [Validators.required, validatorName, equalNameValidator]),
    userEmail: new FormControl('', [Validators.required, validatorEmail, equalEmailValidator]),
    pass: new FormGroup({
      password: new FormControl ('', [ Validators.required, Validators.minLength(4)]),
      rpassword: new FormControl('', [ Validators.required])
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
