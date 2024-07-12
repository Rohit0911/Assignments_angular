import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoChartRoutingModule } from './go-chart-routing.module';
import { GoChartComponent } from './go-chart.component';


@NgModule({
  declarations: [
    GoChartComponent
  ],
  imports: [
    CommonModule,
    GoChartRoutingModule
  ]
})
export class GoChartModule { }
