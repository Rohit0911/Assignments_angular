import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GojsComponent } from './gochart.component';



const routes: Routes = [
  {
    path:'gochart',component:GojsComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GochartRoutingModule { }
