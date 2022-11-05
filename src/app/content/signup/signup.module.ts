import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';




@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    SignUpRoutingModule
     ],
 
})
export class SignupModule { }
