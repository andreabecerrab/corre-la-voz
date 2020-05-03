import { Component, OnInit } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
})
export class TableStrikesComponent implements OnInit {
  strikes = [];
  selectedDelete: number = -1;
  selectedEdit: Marcha;

  constructor(private _marchaServices: MarchaServiceService) {}
  ngOnInit() {
    this.strikes = this._marchaServices.getMarchas();
  }
  delete(id) {
    this.selectedDelete = id;
  }
  confirmDelete() {
    this._marchaServices.deleteMarcha(this.selectedDelete);
  }
  edit(strike) {
    this.selectedEdit = strike;
  }
}
