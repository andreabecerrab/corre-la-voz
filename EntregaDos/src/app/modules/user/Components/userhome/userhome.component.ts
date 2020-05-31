import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  animations: [
    trigger('marchaAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          filter: 'drop-shadow(10px 10px 10px gray)',
        }),
        animate(
          '5s ease-out',
          style({
            opacity: 3,
            filter: 'drop-shadow(0px 0px 0px gray)',
          })
        ),
      ]),
    ]),
  ],
})
export class UserhomeComponent implements OnInit {
  id: number;
  strikes = [];
  constructor(private _marchasServices: MarchaServiceService) {}

  ngOnInit() {
    this.strikes = this._marchasServices.getMarchas();
  }
}
