import { Component, OnInit } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Marcha } from 'src/app/models/Marcha';
import { Comentario } from 'src/app/models/Comentario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  id: string;
  strike: Marcha;
  comentarios: Comentario[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _marchasServices: MarchaServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this._marchasServices
          .getMarcha(params.get('id'))
          .subscribe(
            (strike) => (
              (this.strike = strike),
              (this.comentarios = strike.comentarios),
              (this.id = strike._id)
            )
          );
      } else {
        console.log('id not founded');
      }
    });
  }
}
