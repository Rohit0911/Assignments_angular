import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
// import { UserdataModule } from './modules/userdata/userdata.module';
// import { UserdataComponent } from './modules/userdata/userdata.component';

const routes: Routes = [
  {
    path: 'app-home', component:HomeComponent
  },


  {
    path: '', component:HomeComponent
  },
  

  // {
  //   path:'userdata',component:UserdataComponent
  // },


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


