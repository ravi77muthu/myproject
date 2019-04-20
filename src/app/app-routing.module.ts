import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'staff',
    loadChildren:'./staff/staff.module#StaffModule',
    canActivate: [AuthGuard]
  },
  {
    path:'student',
    loadChildren:'./student/student.module#StudentModule'
  },
  {
    path:'regform',
    loadChildren:'./regform/regform.module#RegformModule'
  },
  {
    path:'react-form',
    loadChildren:'./reactive/reactive.module#ReactiveModule'
  },
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
