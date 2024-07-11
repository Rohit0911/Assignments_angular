import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
// import { TextDisplayComponent } from './modules/home/components/text-display/text-display.component';
// import { FormatterComponent } from './modules/home/components/formatter/formatter.component';
import { TextDisplayComponent } from './modules/home/Components/text-display/text-display.component';
import { FormatterComponent } from './modules/home/Components/formatter/formatter.component';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NameEditorComponent } from './modules/name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormatterComponent,
    NameEditorComponent,
  
    

  
   


  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
