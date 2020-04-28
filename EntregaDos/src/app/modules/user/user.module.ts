import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ToastComponent } from './components/toast/toast.component';
import { CarrusselComponent } from './components/carrussel/carrussel.component';
import { ContentMapaComponent } from './components/content-mapa/content-mapa.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { InteracrionsComponent } from './components/interacrions/interacrions.component';
import { AgregarMarkComponent } from './components/agregar-mark/agregar-mark.component';
import { AgregarpuntoComponent } from './components/agregarpunto/agregarpunto.component';
import { ContentDescripcionMarcharchasComponent } from './components/content-descripcion-marcharchas/content-descripcion-marcharchas.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { TwCardComponent } from './components/tw-card/tw-card.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
//routing
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ToastComponent,
    CarrusselComponent,
    ContentMapaComponent,
    MapaComponent,
    InteracrionsComponent,
    AgregarMarkComponent,
    AgregarpuntoComponent,
    ContentDescripcionMarcharchasComponent,
    ResourcesComponent,
    TwitterComponent,
    TwCardComponent,
    UserhomeComponent,
    CommentsComponent,
    UsersidebarComponent,
    CardComponent,
    UserprofileComponent,
  ],
  exports: [UserhomeComponent, ResourcesComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
