import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
// import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from '../message/message.component';
import { UserComponent } from '../auth/user.component';

const routes: Routes = [
  {
    path: 'dog',
    component: MessageComponent
  },
  {
    path: 'hat',
    component: UserComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

  // {
  //   path: '',
  //   redirectTo: 'message',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuardService],
  //   loadChildren: '../admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'form',
  //   loadChildren: '../form/form.module#FormModule'
  // },
  // {
  //   path: 'login',
  //   component: UserComponent
  // },
