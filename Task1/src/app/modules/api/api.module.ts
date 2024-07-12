import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIRoutingModule } from './api-routing.module';
import { ApicompComponent } from './apicomp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApicompComponent
    
  ],
  imports: [
    CommonModule,
    APIRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class APIModule { }
