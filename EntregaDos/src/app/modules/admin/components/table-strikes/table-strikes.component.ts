import { Component, OnInit } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
})
export class TableStrikesComponent implements OnInit {
 strikes=[];
  constructor(private _adminServices: MarchaServiceService) {
  
   
  }

  ngOnInit(){
    this.strikes=this._adminServices.getMarchas();
  }
}
