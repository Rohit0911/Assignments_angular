import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GochartRoutingModule } from './gochart-routing.module';
import { GochartComponent } from './gochart.component';


@NgModule({
  declarations: [
    GochartComponent
  ],
  imports: [
    CommonModule,
    GochartRoutingModule
  ]
})
export class GochartModule { }
