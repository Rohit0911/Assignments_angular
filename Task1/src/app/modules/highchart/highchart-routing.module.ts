import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartComponent } from './highchart.component';

const routes: Routes = [
  {
    path:'app-highchart',component:HighchartComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartRoutingModule { }
