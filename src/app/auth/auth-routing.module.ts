import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserSigninComponent } from './user-signin.component';
import { UserSignupComponent } from './user-signup.component';
import { UserLogoutComponent } from './user-logout.component';

const routes: Routes = [
	{
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: UserComponent,
    children: [
      { path: '', component: UserSignupComponent },
      { path: 'signin', component: UserSigninComponent },
      { path: 'logout', component: UserLogoutComponent }
    ]
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }