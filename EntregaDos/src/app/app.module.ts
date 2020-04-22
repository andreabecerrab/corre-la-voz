import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './main-components/menu/menu.component';
import { AdminDashboardComponent } from '../modules/admin/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { ProfileComponent } from './main-components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AdminDashboardComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
