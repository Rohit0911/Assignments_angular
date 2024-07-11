import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
// import { TextDisplayComponent } from './modules/home/components/text-display/text-display.component';
// import { FormatterComponent } from './modules/home/components/formatter/formatter.component';
import { TextDisplayComponent } from './modules/home/Components/text-display/text-display.component';
import { FormatterComponent } from './modules/home/Components/formatter/formatter.component';
import { HomeModule } from './modules/home/home.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { UserdataModule } from './modules/userdata/userdata.module';
import { CookieService } from 'ngx-cookie-service';
import { APIRoutingModule } from './modules/api/api-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { APIModule } from './modules/api/api.module';








@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserdataModule,
    ReactiveFormsModule,
    APIRoutingModule,
    HttpClientModule,
    APIModule
   


    

    
    
  ],
  
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
