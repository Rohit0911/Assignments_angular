import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { FormatterComponent } from './components/formatter/formatter.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    // TextDisplayComponent,
    // FormatterComponent,
    // HomeComponen
    ],
    
    imports: [
      CommonModule,
      HomeRoutingModule,
      AppRoutingModule
   
  ]
})
export class HomeModule { }
