import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDisplayComponent } from './Components/text-display/text-display.component';
import { FormatterComponent } from './Components/text-display/formatter/formatter.component';
import { homeComponent } from './home.component';



@NgModule({
  declarations: [
    TextDisplayComponent,
    FormatterComponent,
    homeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
