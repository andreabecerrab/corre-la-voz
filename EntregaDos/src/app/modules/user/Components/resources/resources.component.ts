import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Comentario } from 'src/app/models/Comentario';
import { Marcha } from 'src/app/models/Marcha';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  id: string;
  strike: Marcha;
  private marchaSub: Subscription;
  comentarios: Comentario[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _marchasServices: MarchaServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this._marchasServices.getMarcha(params.get('id'));
        this.marchaSub = this._marchasServices
          .getMarchaUpdatedListener()
          .subscribe((strike: Marcha) => {
            (this.strike = strike),
              (this.comentarios = this.strike.comentarios),
              (this.id = strike._id);
          });
      } else {
        console.log('id not founded');
      }
    });
  }
}
