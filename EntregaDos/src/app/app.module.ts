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

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    SiginComponent,
    RibbonComponent,
    SidebarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    LandingpageModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
