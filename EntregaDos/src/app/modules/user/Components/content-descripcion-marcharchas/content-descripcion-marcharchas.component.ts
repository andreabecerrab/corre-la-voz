import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-descripcion-marcharchas',
  templateUrl: './content-descripcion-marcharchas.component.html',
})
export class ContentDescripcionMarcharchasComponent implements OnInit {
  public nombreMarcha: string;
  public datedm: string;
  public descripcion: string;

  constructor() {
    this.nombreMarcha = 'Marcha Nombre';
    this.datedm = '10/Marzo/2020';
    this.descripcion =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.';
  }

  ngOnInit(): void {}
}
