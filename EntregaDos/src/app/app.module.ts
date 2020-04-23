import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './main-components/menu/menu.component';

import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';
import { RibbonComponent } from './main-components/ribbon/ribbon.component';
import {UserModule} from './modules/user/user.module';

import { TabContentComponent } from './main-components/tab-content/tab-content.component';


















@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    HeaderComponent,
    LoginComponent,
    SiginComponent,
    RibbonComponent,
    TabContentComponent
   
  ],
  imports: [BrowserModule, LandingpageModule, UserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
