import { Component, OnInit, Input } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';

@Component({
  selector: 'app-content-mapa',
  templateUrl: './content-mapa.component.html',
})
export class ContentMapaComponent implements OnInit {
  @Input() strike: Marcha;
  direccion: any;
  center: any;

  marker_color: string = '#3bb2d0';

  constructor() {}
  ngOnInit(): void {
    this.direccion = this.strike.direccion;
    this.center = [this.direccion.longitude, this.direccion.latitude];
  }
}
