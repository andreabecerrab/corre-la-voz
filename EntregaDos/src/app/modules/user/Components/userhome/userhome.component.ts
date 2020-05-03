import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
})
export class UserhomeComponent implements OnInit {
  strikes = [];
  id: number;
  constructor(private _marchasServices: MarchaServiceService) {}

  ngOnInit() {
    this.strikes = this._marchasServices.getMarchas();
    // this._marchasServices.singleM.subscribe((id) => (this.id = id));
  }

  // selectMarcha() {
  //   this._marchasServices.changetMarcha;
  // }
}
