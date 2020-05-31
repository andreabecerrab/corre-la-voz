import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MarchaServiceService } from 'src/app/services/marcha-service.service';

import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  id: number;
  strike;
  comentarios: Comentario[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _marchasServices: MarchaServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.id = this.route.snapshot.params.id;
    this.strike = this._marchasServices.getMarcha(this.id);
    console.log(this.strike);
  }
}
