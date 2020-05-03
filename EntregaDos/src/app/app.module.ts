import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//main components
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { ProfileComponent } from './main-components/profile/profile.component';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';
import { RibbonComponent } from './main-components/ribbon/ribbon.component';
//modules
import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
//routing
import { AppRoutingModule } from './app-routing.module';
import { UserSidebarComponent } from './main-components/user-sidebar/user-sidebar.component';
import { EditProfileComponent } from './main-components/edit-profile/edit-profile.component';
import {MarchaServiceService} from './services/marcha-service.service';

import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';
import localeUS from '@angular/common/locales/en';


registerLocaleData(localeMX, 'es-149');
registerLocaleData(localeUS, 'en');
//Services
import { TweetsService } from './services/tweets.service';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    SiginComponent,
    RibbonComponent,
    SidebarComponent,
    ProfileComponent,
    UserSidebarComponent,
    EditProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    LandingpageModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
   
  ],
  exports: [ProfileComponent],
<<<<<<< HEAD
  providers: [MarchaServiceService],
=======
  providers: [TweetsService],
>>>>>>> dependencies
  bootstrap: [AppComponent],
})
export class AppModule {}
