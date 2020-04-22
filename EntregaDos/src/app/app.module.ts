import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD

=======
import { HeaderComponent } from './main-components/header/header.component';
>>>>>>> 9863e6f63588ed3dc9007b768af9e8d34ec4dfaf
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
