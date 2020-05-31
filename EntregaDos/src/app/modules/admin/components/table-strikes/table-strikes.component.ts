import { Component, OnInit } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
})
export class TableStrikesComponent implements OnInit {
  strikes: Marcha[];
  selectedDelete: string;
  selectedEdit: Marcha;

  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit() {
    this._marchaServices
      .getMarchas()
      .subscribe((strikes) => (this.strikes = strikes));
  }
  delete(id: string) {
    this.selectedDelete = id;
  }
  confirmDelete() {
    console.log(this.selectedDelete);
    this._marchaServices.deleteMarcha(this.selectedDelete);
  }
  edit(strike: Marcha) {
    this.selectedEdit = strike;
  }
}
