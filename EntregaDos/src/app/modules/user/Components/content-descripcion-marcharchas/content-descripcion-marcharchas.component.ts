import { Component, OnInit, Input } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';

@Component({
  selector: 'app-content-descripcion-marcharchas',
  templateUrl: './content-descripcion-marcharchas.component.html',
})
export class ContentDescripcionMarcharchasComponent implements OnInit {
  @Input() strike: Marcha;
  direccion: any;

  constructor() {}

  ngOnInit(): void {
    this.direccion = this.strike.direccion;
  }
}
