import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GochartComponent } from './gochart.component';



const routes: Routes = [
  {
    path:'gochart',component:GochartComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GochartRoutingModule { }
