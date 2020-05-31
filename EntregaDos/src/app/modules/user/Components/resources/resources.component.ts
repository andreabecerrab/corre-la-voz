import { Component, OnInit } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Marcha } from 'src/app/models/Marcha';
import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  strike;
  comentarios: Comentario[];
  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit(): void {}
}
