import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import {HttpClientModule} from '@angular/common/http';
//routing
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [CommonModule, AppRoutingModule,HttpClientModule],
  exports: [IndexComponent],
})
export class LandingpageModule {}
