import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { TextDisplayComponent } from './modules/home/components/text-display/text-display.component';
import { FormatterComponent } from './modules/home/components/formatter/formatter.component';
// import { DatabaseComponent } from './modules/home/createuser/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormatterComponent,
  
   


  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
