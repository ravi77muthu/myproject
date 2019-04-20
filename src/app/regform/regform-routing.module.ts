import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegdetailComponent} from './regdetail/regdetail.component';

const routes: Routes = [
  {
    path:'',
    component: RegdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegformRoutingModule { }
