import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GochartRoutingModule } from './gochart-routing.module';
import { GojsComponent } from './gochart.component';


@NgModule({
  declarations: [
    GojsComponent
  ],
  imports: [
    CommonModule,
    GochartRoutingModule
  ]
})
export class GochartModule { }
