import { Component, OnInit } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
})
export class TableStrikesComponent implements OnInit {
  strikes: Marcha[];
  private marchaSub: Subscription;
  selectedDelete: string;
  selectedEdit: Marcha;

  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit() {
    this._marchaServices.getMarchas();
    this.marchaSub = this._marchaServices
      .getMarchasUpdatedListener()
      .subscribe((strikes: Marcha[]) => (this.strikes = strikes));
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
