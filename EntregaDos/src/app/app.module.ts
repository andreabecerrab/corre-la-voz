import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SiginComponent],
  imports: [BrowserModule, LandingpageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
