import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full'
  },
  {
    path: 'message',
    loadChildren: '../messages/message.module#MessageModule'
  },
  {
    path: 'auth',
    loadChildren: '../auth/auth.module#AuthModule'
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
//     path: '',
//     redirectTo: 'hat',
//     pathMatch: 'full'
//   },
//   {
//     path: 'hat',
//     loadChildren: '../message/message.module#MessageModule'
//   },
//   {
//     path: 'auth',
//     loadChildren: '../auth/auth.module#AuthModule'
//   },
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
