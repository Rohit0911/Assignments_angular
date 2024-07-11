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
// <<<<<<< Assignmen2
// import { ReactiveFormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
// import { NameEditorComponent } from './modules/name-editor/name-editor.component';
// =======
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
// // import { ColorPickerModule } from 'ngx-color-picker';
// // import { ColorPickerModule } from 'ngx-color-picker';


// >>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormatterComponent,
// <<<<<<< Assignmen2
//     NameEditorComponent,
  
    

  
   

// =======
// >>>>>>> main

  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
// <<<<<<< Assignmen2
//     ReactiveFormsModule,
  
// =======
//     FormsModule,
//     // ColorPickerModule
// >>>>>>> main
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
