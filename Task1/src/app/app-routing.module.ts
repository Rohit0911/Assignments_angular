import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
// import { DatabaseComponent } from './modules/home/createuser/database/database.component';
const routes: Routes = [
  {
    path: 'app-home', component:HomeComponent
  },
  {
    path: '', component:HomeComponent
  },

  // {
  //   path:'app-database',component:DatabaseComponent
  // },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


