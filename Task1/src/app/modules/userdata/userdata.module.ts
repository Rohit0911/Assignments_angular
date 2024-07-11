import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdataRoutingModule } from './userdata-routing.module';
import { UserdataComponent } from './userdata.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserdataComponent
  ],
  imports: [
    CommonModule,
    UserdataRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserdataModule { }
