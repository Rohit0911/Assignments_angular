import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { UserdataModule } from './modules/userdata/userdata.module';
import { CookieService } from 'ngx-cookie-service';
import { APIRoutingModule } from './modules/api/api-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { APIModule } from './modules/api/api.module';
import { HighchartModule } from './modules/highchart/highchart.module';
import { GochartModule } from './modules/gochart/gochart.module';
import { SpcharPipe } from './pipes/spchar.pipe';








@NgModule({
  declarations: [
    AppComponent,
    SpcharPipe,
   
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,

    UserdataModule,

    ReactiveFormsModule,
    APIRoutingModule,
    HttpClientModule,
    
    APIModule,
    HighchartModule,
    GochartModule
   


    

    
    
  ],
  
  providers: [CookieService,SpcharPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
