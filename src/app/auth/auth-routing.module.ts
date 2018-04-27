import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserSigninComponent} from './signin/user-signin.component';
import {UserSignupComponent} from './signup/user-signup.component';
import {UserLogoutComponent} from './logout/user-logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: UserSignupComponent
  },
  {
    path: 'signin',
    component: UserSigninComponent
  },
  {
    path: 'logout',
    component: UserLogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
