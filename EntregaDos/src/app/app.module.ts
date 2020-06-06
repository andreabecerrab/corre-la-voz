import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//main components
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { ProfileComponent } from './main-components/profile/profile.component';

import { RibbonComponent } from './main-components/ribbon/ribbon.component';
//modules
import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
//routing
import { AppRoutingModule } from './app-routing.module';
import { UserSidebarComponent } from './main-components/user-sidebar/user-sidebar.component';
import { EditProfileComponent } from './main-components/edit-profile/edit-profile.component';
//internalization
import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';
import localeUS from '@angular/common/locales/en';
registerLocaleData(localeMX, 'es-149');
registerLocaleData(localeUS, 'en');
//Services
import { MarchaServiceService } from './services/marcha-service.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
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
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ProfileComponent],
  providers: [MarchaServiceService],

  bootstrap: [AppComponent],
})
export class AppModule {}
