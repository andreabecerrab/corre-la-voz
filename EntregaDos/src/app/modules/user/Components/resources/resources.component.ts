import { Component, OnInit } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Marcha } from 'src/app/models/Marcha';
import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  id: number;
  strike: Marcha;
  comentarios: Comentario[];
  constructor(private _marchasServices: MarchaServiceService) {}

  ngOnInit(): void {
    this.strike = this._marchasServices.getMarcha(2);
    this.comentarios = this.strike.comentarios;
  }
}
