import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './main-components/menu/menu.component';

import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';
import { RibbonComponent } from './main-components/ribbon/ribbon.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    HeaderComponent,
    LoginComponent,
    SiginComponent,
    RibbonComponent,
  ],
  imports: [BrowserModule, LandingpageModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
