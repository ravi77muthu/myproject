import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegformRoutingModule } from './regform-routing.module';
import { RegdetailComponent } from './regdetail/regdetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegdetailComponent],
  imports: [
    CommonModule,
    RegformRoutingModule,
    FormsModule
  ]
})
export class RegformModule { }
