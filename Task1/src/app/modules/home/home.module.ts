import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { TextDisplayComponent } from './components/text-display/text-display.component';
// import { FormatterComponent } from './components/formatter/formatter.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TextDisplayComponent } from './Components/text-display/text-display.component';
import { FormatterComponent } from './Components/formatter/formatter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextDisplayComponent,
    FormatterComponent,
    HomeComponent
    
    ],
    
    imports: [
      CommonModule,
      HomeRoutingModule,
      AppRoutingModule,
      FormsModule
      

   
  ]
})
export class HomeModule { }
