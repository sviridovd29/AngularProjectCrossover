import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { Page404Component } from './content/page404/page404.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'back', loadChildren: () => import('../app/content/backoffice/backoffice.module').then(mod => mod.BackofficeModule),
    canActivate: [AuthGuard]
  },
  { path: 'signup', loadChildren: () => import('../app/content/signup/signup.module').then(mod => mod.SignupModule) },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
