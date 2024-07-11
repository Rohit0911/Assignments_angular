import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TextDisplayComponent } from '../Components/text-display/text-display.component';
 import { FormatterComponent } from '../Components/formatter/formatter.component';
// import { DatabaseComponent } from './createuser/database/database.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  // {path:'app-home',component:HomeComponent},
  // {path:'text-display',component:HomeComponent},
  // {path:'text-formatter',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
