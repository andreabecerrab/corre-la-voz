import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenuComponent } from './main-components/menu/menu.component';
import { HeaderComponent } from './main-components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
