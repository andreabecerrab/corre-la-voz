import { Component, OnInit, Input } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';
import * as Mapboxgl from 'mapbox-gl';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

@Component({
  selector: 'app-content-mapa',
  templateUrl: './content-mapa.component.html',
})
export class ContentMapaComponent implements OnInit {
  @Input() strike: Marcha;
  puntos: [any];
  //marker inicial
  direccion: any;
  center: any;
  //marker para agregar punto interés
  addmarker: any;
  //mapa
  map: Mapboxgl.Map;

  //forms
  public titulo: '';

  constructor(private _marchaServices: MarchaServiceService) {}

  //set initial coordinates and point
  ngOnInit(): void {
    this.direccion = this.strike.direccion;
    this.center = [this.direccion.longitude, this.direccion.latitude];
    this.addmarker = [this.direccion.longitude, this.direccion.latitude];
    this.map = new Mapboxgl.Map({ container: 'map' });

    this.puntos = this.strike.puntosLoc;
  }

  //event for click in map
  pickerLocation = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: this.center,
    },
  };

  mapClick(event) {
    if (event.lngLat) {
      var coords = event.lngLat;
      this.addmarker = coords;
      this.pickerLocation.geometry.coordinates = event.lngLat;
    }

    // console.log(this.pickerLocation);
    return coords;
  }

  //add punto

  addPoint() {
    this._marchaServices.addPoint(
      this.strike._id,
      this.titulo,
      this.addmarker.lat,
      this.addmarker.lng
    );

    this.titulo = '';
  }
}
