import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CarrusselComponent } from './components/carrussel/carrussel.component';
import { ContentMapaComponent } from './components/content-mapa/content-mapa.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { InteracrionsComponent } from './components/interacrions/interacrions.component';
import { AgregarMarkComponent } from './components/agregar-mark/agregar-mark.component';
import { AgregarpuntoComponent } from './components/agregarpunto/agregarpunto.component';
import { ContentDescripcionMarcharchasComponent } from './components/content-descripcion-marcharchas/content-descripcion-marcharchas.component';
import { ResourcesComponent } from './components/resources/resources.component';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { CommentsComponent } from './components/comments/comments.component';
//routing
import { UserRoutingModule } from './user-routing.module';
import { StrikecardComponent } from './components/strikecard/strikecard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CarrusselComponent,
    ContentMapaComponent,
    MapaComponent,
    InteracrionsComponent,
    AgregarMarkComponent,
    AgregarpuntoComponent,
    ContentDescripcionMarcharchasComponent,
    ResourcesComponent,
    UserhomeComponent,
    CommentsComponent,
    StrikecardComponent,
  ],
  exports: [UserhomeComponent, ResourcesComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule, HttpClientModule],
})
export class UserModule {}
