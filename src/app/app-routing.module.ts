import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { FormnComponent } from './formn/formn.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {path:"form",component:FormComponent,canActivate:[AuthGuard]},
  {path:"formn",component:FormnComponent,canActivate:[AuthGuard]},
  {path:"list",component:ListComponent,canActivate:[AuthGuard]},
  {
    path:'',
    loadChildren:()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
