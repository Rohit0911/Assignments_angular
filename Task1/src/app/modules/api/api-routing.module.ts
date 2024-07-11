import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicompComponent } from './apicomp.component';

const routes: Routes = [
  {path:'app-apicomp',component:ApicompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APIRoutingModule { }
