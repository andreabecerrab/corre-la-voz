import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import {CardComponent} from './components/card/card.component';
import {ToastComponent} from './components/toast/toast.component';
import {ContCarruselComponent} from './components/cont-carrusel/cont-carrusel.component';
import {CarrusselComponent} from './components/carrussel/carrussel.component';
import {ContentMapaComponent} from  './components/content-mapa/content-mapa.component';
import {MapaComponent} from './components/mapa/mapa.component';
import {InteracrionsComponent} from './components/interacrions/interacrions.component';
import {AgregarMarkComponent} from './components/agregar-mark/agregar-mark.component';
import {AgregarpuntoComponent} from './components/agregarpunto/agregarpunto.component';
import {DescriptionMarchaComponent} from './components/description-marcha/description-marcha.component';
import {NombreMarchaComponent} from './components/nombre-marcha/nombre-marcha.component';
import {DatemarchassComponent} from './components/datemarchass/datemarchass.component';
import{ContentDescripcionMarcharchasComponent} from './components/content-descripcion-marcharchas/content-descripcion-marcharchas.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {StikeContentComponent} from './components/stike-content/stike-content.component';
import {TwitterComponent} from './components/twitter/twitter.component';
import {TwCardComponent} from './components/tw-card/tw-card.component';
import {CarrourelItemComponent} from './Components/carrourel-item/carrourel-item.component';










>>>>>>> liad



@NgModule({
<<<<<<< HEAD
  declarations: [],
  imports: [
    CommonModule
  ]
=======
  declarations: [CardComponent,
    ToastComponent,ContCarruselComponent, CarrusselComponent,ContentMapaComponent,MapaComponent, 
    InteracrionsComponent, AgregarMarkComponent, AgregarpuntoComponent, DescriptionMarchaComponent,
    NombreMarchaComponent, DatemarchassComponent, ContentDescripcionMarcharchasComponent, ResourcesComponent, StikeContentComponent,
    TwitterComponent, TwCardComponent, CarrourelItemComponent ],

    imports: [CommonModule]
>>>>>>> liad
})
export class UserModule { }
