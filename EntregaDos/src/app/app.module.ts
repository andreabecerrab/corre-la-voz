import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './main-components/menu/menu.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './modules/admin/components/table-strikes/table-strikes.component'
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { ProfileComponent } from './main-components/profile/profile.component'

import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';
import { RibbonComponent } from './main-components/ribbon/ribbon.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    HeaderComponent,
    MenuComponent,
    AdminDashboardComponent,
    TableStrikesComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  imports: [BrowserModule, LandingpageModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
