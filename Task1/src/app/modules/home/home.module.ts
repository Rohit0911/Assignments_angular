import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home/home-routing.module';
// import { TextDisplayComponent } from './components/text-display/text-display.component';
// import { FormatterComponent } from './components/formatter/formatter.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TextDisplayComponent } from './Components/text-display/text-display.component';
import { FormatterComponent } from './Components/formatter/formatter.component';


@NgModule({
  declarations: [
    // TextDisplayComponent,
    // FormatterComponent,
    // HomeComponent
    
    ],
    
    imports: [
      CommonModule,
      HomeRoutingModule,
      AppRoutingModule
   
  ]
})
export class HomeModule { }
