import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './createuser/database/database.component';

const routes: Routes = [
  {
    path :'',component:HomeComponent

  }
  
  // {
  //   path:'/app-database',component:DatabaseComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
