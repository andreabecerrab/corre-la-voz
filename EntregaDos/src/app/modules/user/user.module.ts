import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CarrusselComponent } from './components/carrussel/carrussel.component';
import { ContentMapaComponent } from './components/content-mapa/content-mapa.component';
import { ContentDescripcionMarcharchasComponent } from './components/content-descripcion-marcharchas/content-descripcion-marcharchas.component';
import { ResourcesComponent } from './components/resources/resources.component';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { CommentsComponent } from './components/comments/comments.component';
//routing
import { UserRoutingModule } from './user-routing.module';
import { StrikecardComponent } from './components/strikecard/strikecard.component';
import { HttpClientModule } from '@angular/common/http';
//try 4 maps
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    CarrusselComponent,
    ContentMapaComponent,
    ContentDescripcionMarcharchasComponent,
    ResourcesComponent,
    UserhomeComponent,
    CommentsComponent,
    StrikecardComponent,
  ],
  exports: [UserhomeComponent, ResourcesComponent],
  imports: [
    GoogleMapsModule,
    CommonModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiYW5kcmVhYmVjZXJyYWIiLCJhIjoiY2theXdqZG5qMDRpcjJ4cDhvMXowNnczMyJ9.xpaU9oNEgYxG1VE6PG6UKg', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken:
        'pk.eyJ1IjoiYW5kcmVhYmVjZXJyYWIiLCJhIjoiY2theXdqZG5qMDRpcjJ4cDhvMXowNnczMyJ9.xpaU9oNEgYxG1VE6PG6UKg', // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),
  ],
})
export class UserModule {}
