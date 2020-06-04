import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { ApiService } from '../../../../services/api.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Marcha } from 'src/app/models/Marcha';
import { Subscription } from 'rxjs';

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
  strikes: Marcha[];
  private marchaSub: Subscription;

  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit() {
    this._marchaServices.getMarchas();
    this.marchaSub = this._marchaServices
      .getMarchasUpdatedListener()
      .subscribe((strikes: Marcha[]) => (this.strikes = strikes));
  }
}
