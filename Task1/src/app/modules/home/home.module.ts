import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FormatterComponent } from './formatter/formatter.component';



@NgModule({
  declarations: [
    TextDisplayComponent,
    FormatterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
