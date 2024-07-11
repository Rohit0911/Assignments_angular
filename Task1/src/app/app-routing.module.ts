import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { NameEditorComponent } from './modules/name-editor/name-editor.component';

const routes: Routes = [
  {
    path: 'app-home', component:HomeComponent
  },
  {
    path: '', component:HomeComponent
  },
  {
    path:'name-editor', component:NameEditorComponent
  }

  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


